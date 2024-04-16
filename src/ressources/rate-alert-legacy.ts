import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';
import {
    type CreateRateAlertLegacyPayload,
    type RateAlertLegacy,
    type UpdateRateAlertLegacyPayload,
    type WithPagination,
} from '@types';

const BASE_URL = `${PUBLIC_PATH}/ratealert/`;

// This resource is created to maintain a single branch, but it will be removed once the rate alerts for mobile are redesigned.
export class RateAlertLegacyRessource extends InstanceRessource {
    /**
     * List rate alerts
     * @returns
     */
    async list() {
        try {
            const { data } =
                await this.instance.get<WithPagination<RateAlertLegacy>>(
                    BASE_URL
                );
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
            const { data } = await this.instance.get<RateAlertLegacy>(
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
    async create(payload: CreateRateAlertLegacyPayload) {
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
    async update(id: string, payload: UpdateRateAlertLegacyPayload) {
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
