import axios, { type AxiosInstance } from 'axios';
import {
    type CactusError,
    ErrorCodes,
    type InstanceRessourceParams,
} from '@types';

export function handleError(error: any): CactusError {
    if (axios.isAxiosError(error)) {
        return error.response?.data as CactusError;
    }
    return {
        code: ErrorCodes.UNEXPECTED_ERROR,
        detail: 'Unexpected error occured',
    };
}

export class InstanceRessource {
    readonly instance: AxiosInstance;
    handleTokens: (access: string, refersh?: string) => void;
    logout: () => void;

    constructor({ instance, handleTokens, logout }: InstanceRessourceParams) {
        this.instance = instance;
        this.handleTokens = handleTokens;
        this.logout = logout;
    }
}

/**
 * Concatenate query params and url
 * @param baseUrl
 * @param queryParams
 * @returns
 */
export function concatenateQueryParams<TKey extends string>(
    baseUrl: string,
    queryParams?: Partial<
        Record<TKey, string | number | boolean | undefined | null>
    >
) {
    let url = baseUrl;
    if (queryParams == null) {
        return url;
    }
    const cleanedQueryParams = Object.fromEntries(
        Object.entries(queryParams).filter(([_, v]) => v != null)
    );

    Object.keys(cleanedQueryParams).forEach((key, index) => {
        if (cleanedQueryParams[key] !== undefined) {
            url += `${index === 0 ? '?' : '&'}${key}=${
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                cleanedQueryParams[key]
            }`;
        }
    });
    return url;
}
