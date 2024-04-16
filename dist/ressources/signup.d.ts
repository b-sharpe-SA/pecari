import { InstanceRessource } from '../helpers';
import { SignupPayload, SignupResponse } from '../types';
export declare class SignupRessource extends InstanceRessource {
    post(payload: SignupPayload): Promise<SignupResponse>;
}
