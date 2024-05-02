import { MANAGEMENT_PATH } from '@constants';
import { InstanceRessource, handleError } from '@helpers';
import { type RealtimeRule, type WithPagination } from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/realtime_rules/`;

export class RealtimeRulesRessource extends InstanceRessource {
    /**
     * List realtime rules with filters
     * @returns
     */
    async list() {
        try {
            const { data } =
                await this.instance.get<WithPagination<RealtimeRule>>(BASE_URL);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
