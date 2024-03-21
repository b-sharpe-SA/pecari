import { InstanceRessource } from '../helpers';
import { type SignupPayload, SignupResponse } from '../types';
export declare class SignupRessource extends InstanceRessource {
    post(payload: SignupPayload): Promise<SignupResponse>;
}
