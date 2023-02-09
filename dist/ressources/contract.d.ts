import { InstanceRessource } from '../helpers';
import { Contract, SignContractResponse } from '../types';
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
     * @param code otp code
     * @returns
     */
    sign(customer: string, code: string): Promise<SignContractResponse>;
    /**
     * Request code to sign contract
     * @param customer Customer reference
     * @returns
     */
    request(customer: string): Promise<SignContractResponse>;
}
