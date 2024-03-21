import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';

export class MapboxRessource extends InstanceRessource {
    /**
     * Get mapbox token
     * @returns
     */
    async get() {
        try {
            const { data } = await this.instance.get<{ token: string }>(
                `${PUBLIC_PATH}/mapbox/`
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
