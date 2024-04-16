"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
// src/mocks/node.js
const node_1 = require("msw/node");
const msw_1 = require("msw");
const client_1 = require("./client");
const errors_1 = require("./types/errors");
const BASE_API_URL = 'https://cactus.b-sharpe.com';
const VALID_ACCESS_TOKEN = 'access_token';
const EXPIRED_ACCESS_TOKEN = 'expired_access_token';
const REFRESH_TOKEN = 'refresh_token';
const VALID_CUSTOMERS_RESPONSE = ['Tom', 'Jerry', 'Spike'];
const handlers = [
    msw_1.http.get(
    // the "/customers" route will be intercepted.
    `${BASE_API_URL}/management/api/customers/`, 
    // intercepted request, and decides how to handle it.
    ({ request, params, cookies }) => {
        if (request.headers.get('Authorization') ===
            `Bearer ${EXPIRED_ACCESS_TOKEN}`) {
            return msw_1.HttpResponse.json({ code: errors_1.ErrorCodes.AUTH_TOKEN_EXPIRED }, { status: 403 });
        }
        else if (request.headers.get('Authorization') !==
            `Bearer ${VALID_ACCESS_TOKEN}`) {
            return msw_1.HttpResponse.json({ code: errors_1.ErrorCodes.AUTH_INVALID_CREDENTIALS }, { status: 403 });
        }
        return msw_1.HttpResponse.json(VALID_CUSTOMERS_RESPONSE);
    }),
    msw_1.http.post(
    // the "/token/refresh" route will be intercepted.
    `${BASE_API_URL}/api/v2/login/token/refresh/`, 
    // intercepted request, and decides how to handle it.
    async ({ request, params, cookies }) => {
        const { refresh } = (await request.json());
        if (refresh === REFRESH_TOKEN) {
            return msw_1.HttpResponse.json({
                access: VALID_ACCESS_TOKEN,
                refresh: REFRESH_TOKEN,
            });
        }
        return msw_1.HttpResponse.error();
    }),
    msw_1.http.post(
    // the "/token" route will be intercepted.
    `${BASE_API_URL}/management/api/token/`, 
    // intercepted request, and decides how to handle it.
    async ({ request, params, cookies }) => {
        return msw_1.HttpResponse.json({
            access: VALID_ACCESS_TOKEN,
            refresh: REFRESH_TOKEN,
        });
    }),
];
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
exports.server = (0, node_1.setupServer)(...handlers);
beforeAll(() => {
    exports.server.listen();
});
describe('global/token management', () => {
    const saveTokens = jest.fn();
    const cactusClient = new client_1.CactusClient({
        baseUrl: BASE_API_URL,
        saveTokens,
    });
    test('should have call saveTokens', async () => {
        await cactusClient.management.token.token({
            email: '',
            password: '',
            otp_code: '',
        });
        expect(saveTokens).toHaveBeenCalledWith(VALID_ACCESS_TOKEN, REFRESH_TOKEN);
    });
});
describe('management/customers ressource', () => {
    test('should return an error because access token is undefined', async () => {
        const onLogout = jest.fn();
        const cactusClient = new client_1.CactusClient({
            baseUrl: BASE_API_URL,
            onLogout,
        });
        try {
            const data = await cactusClient.management.customers.list({});
            expect(data).toEqual({ code: errors_1.ErrorCodes.AUTH_INVALID_CREDENTIALS });
            expect(onLogout).toHaveBeenCalled();
        }
        catch (error) {
            expect(error).toBeTruthy();
        }
    });
    test('should return a list of customers, even if token is expired because refresh token is ok', async () => {
        const cactusClient = new client_1.CactusClient({
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
        const cactusClient = new client_1.CactusClient({
            baseUrl: BASE_API_URL,
            token: EXPIRED_ACCESS_TOKEN,
            refreshToken: 'bad_refresh_token',
        });
        try {
            const data = await cactusClient.management.customers.list({});
            expect(data).toEqual({ code: errors_1.ErrorCodes.AUTH_TOKEN_EXPIRED });
        }
        catch (error) {
            expect(error).toBeTruthy();
        }
    });
    test('should return a list of customers', async () => {
        const cactusClient = new client_1.CactusClient({
            baseUrl: BASE_API_URL,
            token: VALID_ACCESS_TOKEN,
        });
        const data = await cactusClient.management.customers.list({});
        expect(data).toEqual(VALID_CUSTOMERS_RESPONSE);
    });
});
