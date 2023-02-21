import { InstanceRessource } from '../helpers';
import { CreateRateAlertPayload, RateAlert, WithPagination } from '../types';
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
     * Delete a rate alert
     * @param id
     * @returns
     */
    delete(id: string): Promise<any>;
}
