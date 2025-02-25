import { InstanceRessource } from '../../helpers';
import { type WithPagination, type CreateMarginDiscountsPayload, type ListMarginDiscountsQueryParams, type MarginDiscounts } from '../../types';
export declare class MarginDicountsRessource extends InstanceRessource {
    /**
     * List fees discounts
     * @param payload query params
     * @returns
     */
    list(queryParams: ListMarginDiscountsQueryParams): Promise<WithPagination<MarginDiscounts>>;
    /**
     * Create new fees discount
     * @param payload
     * @returns
     */
    create(payload: CreateMarginDiscountsPayload): Promise<MarginDiscounts>;
    /**
     * Update a fees discount
     * @param id id of the fees discount
     * @param payload
     * @returns
     */
    update(id: string, payload: CreateMarginDiscountsPayload): Promise<MarginDiscounts>;
    /**
     * Delete a fees discount
     * @param id id of the fees discount
     * @returns
     */
    delete(id: string): Promise<void>;
}
