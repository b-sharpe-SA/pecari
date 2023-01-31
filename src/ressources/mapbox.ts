import { handleError, InstanceRessource } from '@helpers';

export class MapboxRessource extends InstanceRessource {
    async get() {
        try {
            const { data } = await this.instance.get<{ token: string }>(
                'mapbox'
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
