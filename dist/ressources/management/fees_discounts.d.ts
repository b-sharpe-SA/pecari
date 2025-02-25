import { InstanceRessource } from '../../helpers';
import { type WithPagination, type ListFeesDiscountsQueryParams, type FeesDiscounts, type CreateFeesDiscountsPayload } from '../../types';
export declare class FeesDicountsRessource extends InstanceRessource {
    /**
     * List fees discounts
     * @param payload query params
     * @returns
     */
    list(queryParams: ListFeesDiscountsQueryParams): Promise<WithPagination<FeesDiscounts>>;
    /**
     * Create new fees discount
     * @param payload
     * @returns
     */
    create(payload: CreateFeesDiscountsPayload): Promise<FeesDiscounts>;
    /**
     * Update a fees discount
     * @param id id of the fees discount
     * @param payload
     * @returns
     */
    update(id: string, payload: CreateFeesDiscountsPayload): Promise<FeesDiscounts>;
    /**
     * Delete a fees discount
     * @param id id of the fees discount
     * @returns
     */
    delete(id: string): Promise<void>;
}
