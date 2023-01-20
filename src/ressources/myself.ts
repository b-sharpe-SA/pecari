import { cactusClient } from '@client';
import { handleError } from '@helpers';

export class MyselfRessource {
    async get() {
        try {
            const { data } =
                await cactusClient.instance.get<MyselfRessourceResponse>(
                    'users/user/myself'
                );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
