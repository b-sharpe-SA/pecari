import { InstanceRessource } from '../helpers';
import { CreateTicketPayload, ListTicketsParams, Ticket, WithPagination } from '../types';
export declare class TicketRessource extends InstanceRessource {
    private getUrl;
    /**
     * List tickets for customer
     * @param payload
     * @param payload.limit Limit tickets, default to 5
     * @param payload.canceled Returns not canceled or canceled tickets, default to false
     * @param payload.customer Customer reference
     * @param payload.next url for next request. If provided it will fetch this url
     * @returns
     */
    list({ limit, canceled, customer, next, }: ListTicketsParams): Promise<WithPagination<Ticket>>;
    /**
     * Create ticket for specific customer
     * @param customer Customer reference
     * @param payload Payload for ticket
     * @returns
     */
    create(customer: string, payload: CreateTicketPayload): Promise<Ticket>;
    /**
     * Delete ticket for specific customer
     * @param customer Customer reference
     * @param reference Ticket reference
     * @returns
     */
    delete(customer: string, reference: string): Promise<Ticket>;
}
