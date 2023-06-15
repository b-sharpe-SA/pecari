import { InstanceRessource } from '../helpers';
import { type UpdatePasswordPayload } from '../types';
export declare class UpdatePasswordRessource extends InstanceRessource {
    update(payload: UpdatePasswordPayload): Promise<any>;
}
