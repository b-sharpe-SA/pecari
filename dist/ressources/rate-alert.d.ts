import { InstanceRessource } from '../helpers';
import {
    CreateRateAlertPayload,
    RateAlert,
    UpdateRateAlertPayload,
    WithPagination,
} from '../types';
export declare class RateAlertRessource extends InstanceRessource {
    /**
     * List rate alerts
     * @returns
     */
    list(): Promise<WithPagination<RateAlert>>;
    /**
     * Create a rate alert
     * @param payload Rate alert payload
     */
    create(payload: CreateRateAlertPayload): Promise<any>;
    /**
     * Update a rate alert based on id
     * @param id Id of the rate alert
     * @param payload Rate alert payload
     */
    update(id: string, payload: UpdateRateAlertPayload): Promise<any>;
    /**
     * Delete a rate alert
     * @param id
     * @returns
     */
    delete(id: string): Promise<any>;
}
