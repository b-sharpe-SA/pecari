import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';
import { SignupPayload, SignupResponse } from '@types';

export class SignupRessource extends InstanceRessource {
    async post(payload: SignupPayload) {
        try {
            const { data } = await this.instance.post<SignupResponse>(
                `${PUBLIC_PATH}/users/user/signup/`,
                payload
            );
            if (payload.auth_method === 'jwt') {
                this.setToken(data.access);
            }
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
