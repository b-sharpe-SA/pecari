import { handleError, InstanceRessource } from '@helpers';
import {
    type CreateRateAlertPayload,
    type RateAlert,
    type UpdateRateAlertPayload,
    type WithPagination,
} from '@types';

const BASE_URL = 'ratealert/';

export class RateAlertRessource extends InstanceRessource {
    /**
     * List rate alerts
     * @returns
     */
    async list() {
        try {
            const { data } =
                await this.instance.get<WithPagination<RateAlert>>(BASE_URL);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get specific rate alert by id
     * @param id Id of rate alert
     * @returns
     */
    async get(id: string | number) {
        try {
            const { data } = await this.instance.get<RateAlert>(
                `${BASE_URL}${id}/`
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Create a rate alert
     * @param payload Rate alert payload
     */
    async create(payload: CreateRateAlertPayload) {
        try {
            const { data } = await this.instance.post(BASE_URL, payload);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update a rate alert based on id
     * @param id Id of the rate alert
     * @param payload Rate alert payload
     */
    async update(id: string, payload: UpdateRateAlertPayload) {
        try {
            const { data } = await this.instance.patch(
                `${BASE_URL}${id}/`,
                payload
            );

            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete a rate alert
     * @param id
     * @returns
     */
    async delete(id: string) {
        try {
            const { data } = await this.instance.delete(`${BASE_URL}${id}/`);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
