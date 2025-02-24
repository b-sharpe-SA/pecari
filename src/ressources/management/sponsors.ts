import { MANAGEMENT_PATH } from '@constants';
import {
    InstanceRessource,
    concatenateQueryParams,
    handleError,
} from '@helpers';
import {
    type ListSponsorsQueryParams,
    type SponsorCode,
    type WithPagination,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/sponsors/`;

export class SponsorsRessource extends InstanceRessource {
    /**
     * List sponsor codes with filters
     * @returns
     */
    async list(queryParams: ListSponsorsQueryParams = {}) {
        try {
            const url = concatenateQueryParams(BASE_URL, queryParams);
            const { data } =
                await this.instance.get<WithPagination<SponsorCode>>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get a sponsor code by id
     * @param id
     * @returns
     */
    async get(id: number) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.get<SponsorCode>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
