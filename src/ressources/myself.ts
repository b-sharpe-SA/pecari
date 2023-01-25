import { handleError, InstanceRessource } from '@helpers';
import { Myself, UpdateMyselfPayload } from '@types';

export class MyselfRessource extends InstanceRessource {
    async get() {
        try {
            const { data } = await this.instance.get<Myself>(
                'users/user/myself'
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    async update(payload: UpdateMyselfPayload) {
        try {
            const { data } = await this.instance.patch<Myself>(
                'users/user/myself',
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
