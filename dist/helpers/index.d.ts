import { type AxiosInstance } from 'axios';
import { type Stringifiable } from 'query-string';
import { type CactusError, type InstanceRessourceParams } from '../types';
export declare function handleError(error: any): CactusError;
export declare class InstanceRessource {
    readonly instance: AxiosInstance;
    handleTokens: (access: string, refersh?: string) => void;
    logout: () => void;
    constructor({ instance, handleTokens, logout }: InstanceRessourceParams);
}
/**
 * Concatenate query params and url
 * @param baseUrl
 * @param queryParams
 * @returns
 */
export declare function concatenateQueryParams<TKey extends string>(baseUrl: string, queryParams?: Partial<Record<TKey, Stringifiable | Stringifiable[]>>): string;
