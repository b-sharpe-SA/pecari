import { InstanceRessource } from '../helpers';
import { Customer, type UpdateCustomerPayload, WithPagination } from '../types';
export declare class CustomerRessource extends InstanceRessource {
    /**
     * List all customers for current user
     * @returns List of customers
     */
    list(): Promise<WithPagination<Customer>>;
    /**
     * Get single customer based on reference
     * @param reference customer reference
     * @returns Customer
     */
    get(reference: string): Promise<Customer>;
    /**
     * Update customer based on reference
     * @param reference
     * @param payload
     * @returns Customer
     */
    update(reference: string, payload: UpdateCustomerPayload): Promise<Customer>;
}
