import { InstanceRessource } from '../helpers';
export declare class PhoneNumberRessource extends InstanceRessource {
    /**
     * Send an OTP code to the connected user's phone number
     * @returns
     */
    request(): Promise<any>;
    /**
     * Verify of an OTP code sent to a user's phone
     * @param code
     * @returns
     */
    verify(code: string): Promise<any>;
}
