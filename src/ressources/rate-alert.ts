import { handleError, InstanceRessource } from '@helpers';
import { CreateRateAlertPayload, RateAlert, WithPagination } from '@types';

const BASE_URL = 'ratealert/';

export class RateAlertRessource extends InstanceRessource {
    /**
     * List rate alerts
     * @returns
     */
    async list() {
        try {
            const { data } = await this.instance.get<WithPagination<RateAlert>>(
                BASE_URL
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