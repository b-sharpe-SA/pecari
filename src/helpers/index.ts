import axios from 'axios';
import { CactusError, ErrorCodes } from '@types';

export function handleError(error: any): CactusError {
    if (axios.isAxiosError(error)) {
        return error.response?.data as CactusError;
    }
    return {
        code: ErrorCodes.UNEXPECTED_ERROR,
        detail: 'Unexpected error occured',
    };
}
