import { handleError, InstanceRessource } from '@helpers';
import { AppCheck } from 'src/types/app-compatibility';

const BASE_URL = 'app_check/';

export class AppCompatibilityResource extends InstanceRessource {
    /**
     * Get informations about latest mobile app version
     * @returns AppCheck
     */
    async get() {
        try {
            const { data } = await this.instance.get<AppCheck>(BASE_URL);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
