import { InstanceRessource } from '../../helpers';
import { type SponsorDiscount, type CreateSponsorCodePayload, type ListSponsorsQueryParams, type SponsorCode, type WithPagination } from '../../types';
export declare class SponsorsRessource extends InstanceRessource {
    /**
     * List sponsor codes with filters
     * @returns
     */
    list(queryParams?: ListSponsorsQueryParams): Promise<WithPagination<SponsorCode>>;
    listDiscounts(): Promise<WithPagination<SponsorDiscount>>;
    /**
     * Get a sponsor code by id
     * @param id
     * @returns
     */
    get(id: number): Promise<SponsorCode>;
    /**
     * Create a sponsor code
     * @param payload
     * @returns
     */
    create(payload: CreateSponsorCodePayload): Promise<SponsorCode>;
    /**
     * Update a sponsor code
     * @param id
     * @param payload
     * @returns
     */
    update(id: number, payload: CreateSponsorCodePayload): Promise<SponsorCode>;
    /**
     * Delete a sponsor code
     * @param id
     * @returns
     */
    delete(id: number): Promise<void>;
}
