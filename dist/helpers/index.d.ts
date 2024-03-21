import { type AxiosInstance } from 'axios';
import { type CactusError, type InstanceRessourceParams } from '../types';
export declare function handleError(error: any): CactusError;
export declare class InstanceRessource {
    readonly instance: AxiosInstance;
    setToken: (token: string) => void;
    removeToken: () => void;
    constructor({ instance, setToken, removeToken }: InstanceRessourceParams);
}
/**
 * Concatenate query params and url
 * @param baseUrl
 * @param queryParams
 * @returns
 */
export declare function concatenateQueryParams(baseUrl: string, queryParams?: Record<string, string | number | boolean>): string;
