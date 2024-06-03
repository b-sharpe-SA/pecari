import { InstanceRessource } from '../../helpers';
import { type WithPagination, type ListCustomersQueryParams, type AdminRestrictedCustomer } from '../../types';
export declare class CustomersRessource extends InstanceRessource {
    /**
     * List users with filters
     * @param payload - { limit, offset, ordering, search }
     * @returns
     */
    list(queryParams: ListCustomersQueryParams): Promise<WithPagination<AdminRestrictedCustomer>>;
    /**
     * Get a customer by id
     * @param id
     * @returns
     */
    get(id: string): Promise<AdminRestrictedCustomer>;
    /**
     * Update a customer by id
     * @param id
     * @returns
     */
    update(id: string, customer: Partial<AdminRestrictedCustomer>): Promise<AdminRestrictedCustomer>;
    /**
     * Delete a customer by id
     * @param id
     * @returns
     */
    delete(id: string): Promise<any>;
    uploadDocument(id: string, formData: FormData): Promise<any>;
}
