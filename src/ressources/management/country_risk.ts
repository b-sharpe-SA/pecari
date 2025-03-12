import { MANAGEMENT_PATH } from '@constants';
import {
    InstanceRessource,
    concatenateQueryParams,
    handleError,
} from '@helpers';
import {
    type CreateCountryRiskPayload,
    type CountryRisk,
    type ListCountryRiskQueryParams,
    type WithPagination,
    type UpdateCountryRiskPayload,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/country-risk/`;

export class CountryRiskRessource extends InstanceRessource {
    /**
     * List country risk with filters
     * @returns
     */
    async list(queryParams?: ListCountryRiskQueryParams) {
        try {
            const url = concatenateQueryParams(BASE_URL, queryParams ?? {});
            const { data } =
                await this.instance.get<WithPagination<CountryRisk>>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get a country risk by id
     * @param id
     * @returns
     */
    async get(id: string) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.get<CountryRisk>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Create a country risk
     * @param payload
     * @returns
     */
    async create(payload: CreateCountryRiskPayload) {
        try {
            const { data } = await this.instance.post<CountryRisk>(
                BASE_URL,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update a country risk by id
     * @param id
     * @param payload
     * @returns
     */
    async update(id: string, payload: UpdateCountryRiskPayload) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.patch<CountryRisk>(
                url,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete a country risk by id
     * @param id
     * @returns
     */
    async delete(id: string) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.delete(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
