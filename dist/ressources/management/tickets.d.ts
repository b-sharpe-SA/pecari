import { InstanceRessource } from '../../helpers';
import { type AdminListTicketsQueryParams, type Ticket, type WithPagination } from '../../types';
export declare class TicketsRessource extends InstanceRessource {
    /**
     * List tickets with filters
     * @param payload - { limit, offset, ordering, search, customer__id }
     * @returns
     */
    list(queryParams: AdminListTicketsQueryParams): Promise<WithPagination<Ticket>>;
    /**
     * Get a ticket by id
     * @param id
     * @returns
     */
    get(id: string): Promise<Ticket>;
    /**
     * Update a ticket by id
     * @param id
     * @returns
     */
    update(id: string, ticket: Partial<Ticket>): Promise<Ticket>;
    /**
     * Delete a ticket by id
     * @param id
     * @returns
     */
    delete(id: string): Promise<any>;
}
