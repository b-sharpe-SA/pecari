import { InstanceRessource } from '../../helpers';
import { type CreateCountryRiskPayload, type CountryRisk, type ListCountryRiskQueryParams, type WithPagination, type UpdateCountryRiskPayload } from '../../types';
export declare class CountryRiskRessource extends InstanceRessource {
    /**
     * List country risk with filters
     * @returns
     */
    list(queryParams?: ListCountryRiskQueryParams): Promise<WithPagination<CountryRisk>>;
    /**
     * Get a country risk by id
     * @param id
     * @returns
     */
    get(id: string): Promise<CountryRisk>;
    /**
     * Create a country risk
     * @param payload
     * @returns
     */
    create(payload: CreateCountryRiskPayload): Promise<CountryRisk>;
    /**
     * Update a country risk by id
     * @param id
     * @param payload
     * @returns
     */
    update(id: string, payload: UpdateCountryRiskPayload): Promise<CountryRisk>;
    /**
     * Delete a country risk by id
     * @param id
     * @returns
     */
    delete(id: string): Promise<any>;
}
