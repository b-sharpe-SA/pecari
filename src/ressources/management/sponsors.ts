import { MANAGEMENT_PATH } from '@constants';
import {
    InstanceRessource,
    concatenateQueryParams,
    handleError,
} from '@helpers';
import {
    type SponsorDiscount,
    type CreateSponsorCodePayload,
    type ListSponsorsQueryParams,
    type SponsorCode,
    type WithPagination,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/sponsors/`;
const BASE_URL_DISCOUNTS = `${MANAGEMENT_PATH}/sponsors_discount/`;

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

    async listDiscounts() {
        try {
            const { data } =
                await this.instance.get<WithPagination<SponsorDiscount>>(
                    BASE_URL_DISCOUNTS
                );
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

    /**
     * Create a sponsor code
     * @param payload
     * @returns
     */
    async create(payload: CreateSponsorCodePayload) {
        try {
            const { data } = await this.instance.post<SponsorCode>(
                BASE_URL,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update a sponsor code
     * @param id
     * @param payload
     * @returns
     */
    async update(id: number, payload: CreateSponsorCodePayload) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.patch<SponsorCode>(
                url,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete a sponsor code
     * @param id
     * @returns
     */
    async delete(id: number) {
        try {
            const url = `${BASE_URL}${id}/`;
            await this.instance.delete(url);
        } catch (error) {
            throw handleError(error);
        }
    }
}
