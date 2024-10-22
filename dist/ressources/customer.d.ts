import { InstanceRessource } from '../helpers';
import { type FieldsWithValidationFlags, type Customer, type UpdateCustomerPayload, type WithPagination } from '../types';
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
    /**
     * Call this endpoint to validate the flags of a customer
     * Mainly used during signup to validate a section
     * @param reference customer reference
     * @param flags array of flags to validate
     */
    validateFlags(reference: string, flags: FieldsWithValidationFlags[]): Promise<Customer>;
}
