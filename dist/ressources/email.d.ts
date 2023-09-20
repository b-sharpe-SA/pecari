import { InstanceRessource } from '../helpers';
export declare class EmailRessource extends InstanceRessource {
    /**
     * Send email to verify user email
     * can be a code or a link
     * @returns
     */
    request(payload: {
        link: boolean;
    }): Promise<any>;
    /**
     * Verify user email code
     * @param code otp code
     * @returns
     */
    verify(code: string): Promise<any>;
}
