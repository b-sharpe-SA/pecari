import { InstanceRessource } from '../helpers';
import { BeneficialOwner, type CreateBeneficialOwnerPayload, type UpdateBeneficialOwnerPayload, WithPagination } from '../types';
export declare class BeneficialOwnerRessource extends InstanceRessource {
    private getUrl;
    /**
     * List beneficial owners for specific customer
     * @param customer Customer reference
     * @returns
     */
    list(customer: string): Promise<WithPagination<BeneficialOwner>>;
    /**
     * Create beneficial owner for specific customer
     * @param customer Customer reference
     * @param payload Beneficial owner payload
     * @returns
     */
    create(customer: string, payload: CreateBeneficialOwnerPayload): Promise<BeneficialOwner>;
    /**
     * Update beneficial owner for specific customer
     * @param customer Customer reference
     * @param reference Beneficial owner reference
     * @param payload Beneficial owner payload
     * @returns
     */
    update(customer: string, reference: string, payload: UpdateBeneficialOwnerPayload): Promise<BeneficialOwner>;
    /**
     * Delete beneficial owner
     * @param customer Customer reference
     * @param reference Beneficial owner reference
     * @returns
     */
    delete(customer: string, reference: string): Promise<BeneficialOwner>;
}
