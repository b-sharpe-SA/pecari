import { InstanceRessource } from '../../helpers';
import { type WithPagination, type CreateMarginDiscountsPayload, type ListMarginDiscountsQueryParams, type MarginDiscounts, type UpdateMarginDiscountsPayload } from '../../types';
export declare class MarginDicountsRessource extends InstanceRessource {
    /**
     * List margin discounts
     * @param payload query params
     * @returns
     */
    list(queryParams: ListMarginDiscountsQueryParams): Promise<WithPagination<MarginDiscounts>>;
    /**
     * Create new margin discount
     * @param payload
     * @returns
     */
    create(payload: CreateMarginDiscountsPayload): Promise<MarginDiscounts>;
    /**
     * Update a margin discount
     * @param id id of the fees discount
     * @param payload
     * @returns
     */
    update(id: string, payload: UpdateMarginDiscountsPayload): Promise<MarginDiscounts>;
    /**
     * Delete a margin discount
     * @param id id of the fees discount
     * @returns
     */
    delete(id: string): Promise<void>;
}
