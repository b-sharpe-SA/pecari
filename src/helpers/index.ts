import axios, { type AxiosInstance } from 'axios';
import queryString, { type Stringifiable } from 'query-string';
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
    queryParams?: Partial<Record<TKey, Stringifiable | Stringifiable[]>>
) {
    if (queryParams == null) {
        return baseUrl;
    }

    const cleanedQueryParams = Object.fromEntries(
        Object.entries(queryParams).filter(([_, v]) => v != null)
    ) as typeof queryParams;

    return queryString.stringifyUrl({
        url: baseUrl,
        query: cleanedQueryParams,
    });
}
