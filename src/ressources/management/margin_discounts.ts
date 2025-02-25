import { MANAGEMENT_PATH } from '@constants';
import {
    InstanceRessource,
    concatenateQueryParams,
    handleError,
} from '@helpers';
import {
    type WithPagination,
    type CreateMarginDiscountsPayload,
    type ListMarginDiscountsQueryParams,
    type MarginDiscounts,
    type UpdateMarginDiscountsPayload,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/customers_margin_discounts/`;

export class MarginDicountsRessource extends InstanceRessource {
    /**
     * List fees discounts
     * @param payload query params
     * @returns
     */
    async list(queryParams: ListMarginDiscountsQueryParams) {
        try {
            const url = concatenateQueryParams(BASE_URL, queryParams ?? {});
            const { data } =
                await this.instance.get<WithPagination<MarginDiscounts>>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Create new fees discount
     * @param payload
     * @returns
     */
    async create(payload: CreateMarginDiscountsPayload) {
        try {
            const { data } = await this.instance.post<MarginDiscounts>(
                BASE_URL,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update a fees discount
     * @param id id of the fees discount
     * @param payload
     * @returns
     */
    async update(id: string, payload: UpdateMarginDiscountsPayload) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.patch<MarginDiscounts>(
                url,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete a fees discount
     * @param id id of the fees discount
     * @returns
     */
    async delete(id: string) {
        try {
            const url = `${BASE_URL}${id}/`;
            await this.instance.delete(url);
        } catch (error) {
            throw handleError(error);
        }
    }
}
