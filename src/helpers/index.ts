import axios, { AxiosInstance } from 'axios';
import { CactusError, ErrorCodes, InstanceRessourceParams } from '@types';

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
    setToken: (token: string) => void;
    removeToken: () => void;

    constructor({ instance, setToken, removeToken }: InstanceRessourceParams) {
        this.instance = instance;
        this.setToken = setToken;
        this.removeToken = removeToken;
    }
}

/**
 * Concatenate query params and url
 * @param baseUrl
 * @param queryParams
 * @returns
 */
export function concatenateQueryParams(
    baseUrl: string,
    queryParams?: Record<string, string | number | boolean>
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
