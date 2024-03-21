import { handleError, InstanceRessource } from '@helpers';
import { type CreatePspPricePayload, PspPrice } from '@types';

export class PspPriceRessource extends InstanceRessource {
    private getUrl(customer: string) {
        return `/users/customer/${customer}/psp_price/`;
    }

    /**
     * Create psp price for current customer
     * @param customer Customer reference
     * @param payload psp price payload
     */
    async create(customer: string, payload: CreatePspPricePayload) {
        const url = this.getUrl(customer);
        try {
            const { data } = await this.instance.post<PspPrice>(url, payload);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Check if price is available or not for current customer
     * @param customer
     * @returns
     */
    async isAvailable(customer: string) {
        const url = `${this.getUrl(customer)}available/`;
        try {
            const { data } = await this.instance.get<{ available: boolean }>(
                url
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
