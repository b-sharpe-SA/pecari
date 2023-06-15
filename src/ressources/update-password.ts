import { handleError, InstanceRessource } from '@helpers';
import { UpdatePasswordPayload } from '@types';

const BASE_URL = 'users/user/update_password/';

export class UpdatePasswordRessource extends InstanceRessource {
    async update(payload: UpdatePasswordPayload) {
        try {
            const { data } = await this.instance.post(BASE_URL, payload);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
