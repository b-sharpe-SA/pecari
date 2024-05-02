import { MANAGEMENT_PATH } from '@constants';
import { InstanceRessource, handleError } from '@helpers';
import { type AdminRestrictedPspBank, type WithPagination } from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/banks/`;

export class BanksRessource extends InstanceRessource {
    /**
     * List realtime rules with filters
     * @returns
     */
    async list() {
        try {
            const { data } =
                await this.instance.get<WithPagination<AdminRestrictedPspBank>>(
                    BASE_URL
                );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
