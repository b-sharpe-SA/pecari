import { InstanceRessource } from '../helpers';
import { Contract, SignContractPayload, SignContractResponse } from '../types';
export declare class ContractRessource extends InstanceRessource {
    private getUrl;
    /**
     * Get contract
     * @param customer Customer reference
     * @returns
     */
    get(customer: string): Promise<Contract>;
    /**
     * Sign contract
     * @param customer Customer reference
     * @param payload payload
     * @param payload.otp_code Optional otp code
     * @param payload.skip Sign contract without otp code
     * @returns
     */
    sign(customer: string, payload: SignContractPayload): Promise<SignContractResponse>;
    /**
     * Request code to sign contract
     * @param customer Customer reference
     * @returns
     */
    request(customer: string): Promise<SignContractResponse>;
}
