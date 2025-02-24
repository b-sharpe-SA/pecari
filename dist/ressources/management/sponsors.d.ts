import { InstanceRessource } from '../../helpers';
import { type ListSponsorsQueryParams, type SponsorCode, type WithPagination } from '../../types';
export declare class SponsorsRessource extends InstanceRessource {
    /**
     * List sponsor codes with filters
     * @returns
     */
    list(queryParams?: ListSponsorsQueryParams): Promise<WithPagination<SponsorCode>>;
    /**
     * Get a sponsor code by id
     * @param id
     * @returns
     */
    get(id: number): Promise<SponsorCode>;
}
