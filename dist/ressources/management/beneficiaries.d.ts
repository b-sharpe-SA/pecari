import { InstanceRessource } from '../../helpers';
import { type WithPagination, type ListCustomersQueryParams, type AdminRestrictedBeneficiary } from '../../types';
export declare class BeneficiariesRessource extends InstanceRessource {
    /**
     * List beneficiaries with filters
     * @param payload - { limit, offset, ordering, search }
     * @returns
     */
    list(queryParams: ListCustomersQueryParams): Promise<WithPagination<AdminRestrictedBeneficiary>>;
    /**
     * Get a beneficiary by id
     * @param id
     * @returns
     */
    get(id: string): Promise<AdminRestrictedBeneficiary>;
    /**
     * Update a beneficiary by id
     * @param id
     * @returns
     */
    update(id: string, beneficiary: Partial<AdminRestrictedBeneficiary>): Promise<AdminRestrictedBeneficiary>;
    /**
     * Delete a beneficary by id
     * @param id
     * @returns
     */
    delete(id: string): Promise<any>;
}
