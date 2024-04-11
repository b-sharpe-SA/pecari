// src/mocks/node.js
import { setupServer } from 'msw/node';
import { http, type HttpHandler, HttpResponse } from 'msw';
import { CactusClient } from './client';
import { ErrorCodes } from './types/errors';

const BASE_API_URL = 'https://cactus.b-sharpe.com';

const VALID_ACCESS_TOKEN = 'access_token';
const EXPIRED_ACCESS_TOKEN = 'expired_access_token';
const REFRESH_TOKEN = 'refresh_token';

const VALID_CUSTOMERS_RESPONSE = ['Tom', 'Jerry', 'Spike'];

const handlers: HttpHandler[] = [
    http.get(
        // the "/customers" route will be intercepted.
        `${BASE_API_URL}/management/api/customers/`,
        // intercepted request, and decides how to handle it.
        ({ request, params, cookies }) => {
            if (
                request.headers.get('Authorization') ===
                `Bearer ${EXPIRED_ACCESS_TOKEN}`
            ) {
                return HttpResponse.json(
                    { code: ErrorCodes.AUTH_TOKEN_EXPIRED },
                    { status: 403 }
                );
            } else if (
                request.headers.get('Authorization') !==
                `Bearer ${VALID_ACCESS_TOKEN}`
            ) {
                return HttpResponse.json(
                    { code: ErrorCodes.AUTH_INVALID_CREDENTIALS },
                    { status: 403 }
                );
            }
            return HttpResponse.json(VALID_CUSTOMERS_RESPONSE);
        }
    ),
    http.post(
        // the "/token/refresh" route will be intercepted.
        `${BASE_API_URL}/api/v2/login/token/refresh/`,
        // intercepted request, and decides how to handle it.
        async ({ request, params, cookies }) => {
            const { refresh } = (await request.json()) as any;
            if (refresh === REFRESH_TOKEN) {
                return HttpResponse.json({
                    access: VALID_ACCESS_TOKEN,
                    refresh: REFRESH_TOKEN,
                });
            }
            return HttpResponse.error();
        }
    ),
    http.post(
        // the "/token" route will be intercepted.
        `${BASE_API_URL}/management/api/token/`,
        // intercepted request, and decides how to handle it.
        async ({ request, params, cookies }) => {
            return HttpResponse.json({
                access: VALID_ACCESS_TOKEN,
                refresh: REFRESH_TOKEN,
            });
        }
    ),
];

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const server = setupServer(...handlers);

beforeAll(() => {
    server.listen();
});

describe('global/token management', () => {
    const saveTokens = jest.fn();
    const cactusClient = new CactusClient({
        baseUrl: BASE_API_URL,
        saveTokens,
    });

    test('should have call saveTokens', async () => {
        await cactusClient.management.token.token({
            email: '',
            password: '',
            otp_code: '',
        });
        expect(saveTokens).toHaveBeenCalledWith(
            VALID_ACCESS_TOKEN,
            REFRESH_TOKEN
        );
    });
});

describe('management/customers ressource', () => {
    test('should return an error because access token is undefined', async () => {
        const onLogout = jest.fn();
        const cactusClient = new CactusClient({
            baseUrl: BASE_API_URL,
            onLogout,
        });

        try {
            const data = await cactusClient.management.customers.list({});
            expect(data).toEqual({ code: ErrorCodes.AUTH_INVALID_CREDENTIALS });
            expect(onLogout).toHaveBeenCalled();
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
    test('should return a list of customers, even if token is expired because refresh token is ok', async () => {
        const cactusClient = new CactusClient({
            baseUrl: BASE_API_URL,
            token: EXPIRED_ACCESS_TOKEN,
            refreshToken: REFRESH_TOKEN,
        });
        const data = await cactusClient.management.customers.list({});
        expect(data).toEqual(VALID_CUSTOMERS_RESPONSE);

        const otherData = await cactusClient.management.customers.list({});
        expect(otherData).toEqual(VALID_CUSTOMERS_RESPONSE);
    });
    test('should return an error because refresh token is not ok', async () => {
        const cactusClient = new CactusClient({
            baseUrl: BASE_API_URL,
            token: EXPIRED_ACCESS_TOKEN,
            refreshToken: 'bad_refresh_token',
        });
        try {
            const data = await cactusClient.management.customers.list({});
            expect(data).toEqual({ code: ErrorCodes.AUTH_TOKEN_EXPIRED });
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
    test('should return a list of customers', async () => {
        const cactusClient = new CactusClient({
            baseUrl: BASE_API_URL,
            token: VALID_ACCESS_TOKEN,
        });
        const data = await cactusClient.management.customers.list({});
        expect(data).toEqual(VALID_CUSTOMERS_RESPONSE);
    });
});
