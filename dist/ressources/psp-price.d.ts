import { InstanceRessource } from '../helpers';
import { type CreatePspPricePayload, PspPrice } from '../types';
export declare class PspPriceRessource extends InstanceRessource {
    private getUrl;
    /**
     * Create psp price for current customer
     * @param customer Customer reference
     * @param payload psp price payload
     */
    create(customer: string, payload: CreatePspPricePayload): Promise<PspPrice>;
    /**
     * Check if price is available or not for current customer
     * @param customer
     * @returns
     */
    isAvailable(customer: string): Promise<{
        available: boolean;
    }>;
}
