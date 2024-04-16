import { InstanceRessource } from '../helpers';
import { type Myself, type UpdateMyselfPayload } from '../types';
export declare class MyselfRessource extends InstanceRessource {
    /**
     * Fetch myself
     * @returns
     */
    get(): Promise<Myself>;
    /**
     * Update myself
     * @param payload
     * @returns
     */
    update(payload: UpdateMyselfPayload): Promise<Myself>;
    /**
     * User wants to delete it's account
     * Can't login after this
     * Send email to customer care notifying user want to delete it's account
     * @param payload
     * @returns
     */
    delete(): Promise<any>;
}
