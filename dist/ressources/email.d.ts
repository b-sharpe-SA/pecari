import { InstanceRessource } from '../helpers';
export declare class EmailRessource extends InstanceRessource {
    /**
     * Request an user email verification code
     * @returns
     */
    request(): Promise<any>;
    /**
     * Verify user email code
     * @param code otp code
     * @returns
     */
    verify(code: string): Promise<any>;
}
