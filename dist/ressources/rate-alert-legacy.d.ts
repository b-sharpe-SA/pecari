import { InstanceRessource } from '../helpers';
import { type CreateRateAlertLegacyPayload, type RateAlertLegacy, type UpdateRateAlertLegacyPayload, type WithPagination } from '../types';
export declare class RateAlertLegacyRessource extends InstanceRessource {
    /**
     * List rate alerts
     * @returns
     */
    list(): Promise<WithPagination<RateAlertLegacy>>;
    /**
     * Get specific rate alert by id
     * @param id Id of rate alert
     * @returns
     */
    get(id: string | number): Promise<RateAlertLegacy>;
    /**
     * Create a rate alert
     * @param payload Rate alert payload
     */
    create(payload: CreateRateAlertLegacyPayload): Promise<any>;
    /**
     * Update a rate alert based on id
     * @param id Id of the rate alert
     * @param payload Rate alert payload
     */
    update(id: string, payload: UpdateRateAlertLegacyPayload): Promise<any>;
    /**
     * Delete a rate alert
     * @param id
     * @returns
     */
    delete(id: string): Promise<any>;
}
