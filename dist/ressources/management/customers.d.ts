import { InstanceRessource } from '../../helpers';
import { type WithPagination, type ListCustomersQueryParams, type AdminRestrictedCustomer, type UploadDocumentType, type CustomersStatusCountResponse, type UpdateAdminRestrictedCustomerPayload } from '../../types';
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
    update(id: string, customer: UpdateAdminRestrictedCustomerPayload): Promise<AdminRestrictedCustomer>;
    /**
     * Delete a customer by id
     * @param id
     * @returns
     */
    delete(id: string): Promise<any>;
    uploadDocument(id: string, formData: FormData): Promise<any>;
    updateDocumentType(customerId: string, documentId: string, type: UploadDocumentType): Promise<any>;
    deleteDocument(customerId: string, documentId: string): Promise<any>;
    getStatusCount(): Promise<CustomersStatusCountResponse>;
}
