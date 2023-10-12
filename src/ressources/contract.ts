import { handleError, InstanceRessource } from '@helpers';
import { type Contract, type SignContractPayload, type SignContractResponse } from '@types';

export class ContractRessource extends InstanceRessource {
    private getUrl(customer: string) {
        return `users/customer/${customer}/contract/`;
    }

    /**
     * Get contract
     * @param customer Customer reference
     * @returns
     */
    async get(customer: string) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.get<Contract>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Sign contract
     * @param customer Customer reference
     * @param payload payload
     * @param payload.otp_code Optional otp code
     * @param payload.skip Sign contract without otp code
     * @returns
     */
    async sign(customer: string, payload: SignContractPayload) {
        try {
            const url = `${this.getUrl(customer)}sign/`;
            const { data } = await this.instance.post<SignContractResponse>(
                url,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Request code to sign contract
     * @param customer Customer reference
     * @returns
     */
    async request(customer: string) {
        try {
            const url = `${this.getUrl(customer)}sign/request/`;
            const { data } = await this.instance.post<SignContractResponse>(
                url
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
