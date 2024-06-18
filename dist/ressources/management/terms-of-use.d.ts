import { InstanceRessource } from '../../helpers';
import { type TermsOfUse } from '../../types';
export declare class TermsOfUseRessource extends InstanceRessource {
    private getUrl;
    /**
     * List terms of use for a customer
     * @returns
     */
    list(customerId: string): Promise<TermsOfUse>;
    /**
     * Get a single terms of use for a customer
     * @returns
     */
    get(customerId: string, termsOfUseId: string): Promise<TermsOfUse>;
    /**
     * Delete a terms of use for a customer
     * @returns
     */
    delete(customerId: string, termsOfUseId: string): Promise<any>;
    /**
     * Generate a new unsigned contract for a customer
     * @returns
     */
    generate(customerId: string): Promise<any>;
    /**
     * Upload a new terms of use for a customer
     * @returns
     */
    upload(customerId: string, formData: FormData): Promise<any>;
}
