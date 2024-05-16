import { InstanceRessource } from '../../helpers';
import { type AdminListTicketsQueryParams, type AdminRestrictedTicket, type WithPagination } from '../../types';
export declare class TicketsRessource extends InstanceRessource {
    /**
     * List tickets with filters
     * @param payload - { limit, offset, ordering, search, customer__id }
     * @returns
     */
    list(queryParams: AdminListTicketsQueryParams): Promise<WithPagination<AdminRestrictedTicket>>;
    /**
     * Get a ticket by id
     * @param id
     * @returns
     */
    get(id: string): Promise<AdminRestrictedTicket>;
    /**
     * Update a ticket by id
     * @param id
     * @returns
     */
    update(id: string, ticket: Partial<AdminRestrictedTicket>): Promise<AdminRestrictedTicket>;
    /**
     * Delete a ticket by id
     * @param id
     * @returns
     */
    delete(id: string): Promise<any>;
}
