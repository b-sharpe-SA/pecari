import {
    concatenateQueryParams,
    handleError,
    InstanceRessource,
} from '@helpers';
import {
    CreateTicketPayload,
    ListTicketsParams,
    Ticket,
    WithPagination,
} from '@types';

export class TicketRessource extends InstanceRessource {
    private getUrl(customerRef: string, ticketRef?: string) {
        return `users/customer/${customerRef}/ticket/${ticketRef ?? ''}`;
    }

    /**
     * List tickets for customer
     * @param payload
     * @param payload.limit Limit tickets, default to 5
     * @param payload.canceled Returns not canceled or canceled tickets, default to false
     * @param payload.customer Customer reference
     * @param payload.next url for next request. If provided it will fetch this url
     * @returns
     */
    async list({
        limit = 5,
        offset = 0,
        canceled = false,
        customer,
        next,
    }: ListTicketsParams) {
        try {
            const url =
                next ??
                concatenateQueryParams(this.getUrl(customer), {
                    limit,
                    canceled,
                    offset,
                });
            const { data } = await this.instance.get<WithPagination<Ticket>>(
                url
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Create ticket for specific customer
     * @param customer Customer reference
     * @param payload Payload for ticket
     * @returns
     */
    async create(customer: string, payload: CreateTicketPayload) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.post<Ticket>(url, payload);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete ticket for specific customer
     * @param customer Customer reference
     * @param reference Ticket reference
     * @returns
     */
    async delete(customer: string, reference: string) {
        try {
            const url = this.getUrl(customer, reference);
            const { data } = await this.instance.delete<Ticket>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Upload document for specific ticket
     * @param customer Customer reference
     * @param reference Reference for ticket
     * @param file File
     * @returns
     */
    async uploadDocument(customer: string, reference: string, file: File) {
        try {
            const url = `${this.getUrl(customer, reference)}/upload/`;
            const { data } = await this.instance.post(url, file, {
                headers: {
                    'Content-Type': file.type,
                    'Content-Disposition': `attachment; filename=${file.name}`,
                },
            });
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
