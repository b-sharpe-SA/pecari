import axios from 'axios';
import { CactusError } from '@types';

export function handleError(error: any): CactusError {
    if (axios.isAxiosError(error)) {
        return error.response?.data as CactusError;
    }
    return {
        code: 'UNEXPECTED_ERROR',
        detail: 'Unexpected error occured',
    };
}
