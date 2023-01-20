import { cactusClient } from '@client';
import { handleError } from '@helpers';
import { Myself } from '@types';

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
}
