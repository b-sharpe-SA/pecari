import { cactusClient } from '@client';
import { handleError } from '@helpers';
import { Myself, UpdateMyselfPayload } from '@types';

export class MyselfRessource {
    async get() {
        try {
            const { data } = await cactusClient.instance.get<Myself>(
                'users/user/myself'
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    async update(payload: UpdateMyselfPayload) {
        try {
            const { data } = await cactusClient.instance.patch<Myself>(
                'users/user/myself',
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
