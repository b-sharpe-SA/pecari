import { InstanceRessource } from '../helpers';
import { type CreateCustomerVbanPayload, type CustomerVBAN, type ListCustomerVbanParams, type WithPagination } from '../types';
export declare class CustomerVbanRessouce extends InstanceRessource {
    private getUrl;
    /**
     * List vbans for customer
     * @param customer Customer reference
     * @param params Query params
     * @returns
     */
    list(customerRef: string, params: ListCustomerVbanParams): Promise<WithPagination<CustomerVBAN>>;
    /**
     * Get vban by id for customer
     * @param customer_ref Customer reference
     * @param vban_id VBAN id
     * @returns
     */
    get(customer: string, vbanId: number): Promise<CustomerVBAN>;
    /**
     * Create a vban for customer
     * @param customer Customer reference
     * @returns
     */
    create(customer: string, payload: CreateCustomerVbanPayload): Promise<CustomerVBAN>;
}
