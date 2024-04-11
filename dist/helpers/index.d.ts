import { AxiosInstance } from 'axios';
import { CactusError, InstanceRessourceParams } from '../types';
export declare function handleError(error: any): CactusError;
export declare class InstanceRessource {
    readonly instance: AxiosInstance;
    handleTokens: (access: string, refersh?: string) => void;
    logout: () => void;
    constructor({ instance, handleTokens, logout, }: InstanceRessourceParams);
}
/**
 * Concatenate query params and url
 * @param baseUrl
 * @param queryParams
 * @returns
 */
export declare function concatenateQueryParams(baseUrl: string, queryParams?: Record<string, string | number | boolean>): string;
