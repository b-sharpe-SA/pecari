import { InstanceRessource } from '../helpers';
import { Myself, UpdateMyselfPayload } from '../types';
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
}
