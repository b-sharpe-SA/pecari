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
