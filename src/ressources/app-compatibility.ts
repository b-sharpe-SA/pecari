import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';
import { type AppCheck } from 'src/types/app-compatibility';

const BASE_URL = `${PUBLIC_PATH}/app_check/`;

export class AppCompatibilityResource extends InstanceRessource {
    /**
     * Get informations about latest mobile app version
     * @returns AppCheck
     */
    async get() {
        try {
            const { data } = await this.instance.get<AppCheck>(BASE_URL, {
                headers: {
                    Authorization: undefined,
                },
            });
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
