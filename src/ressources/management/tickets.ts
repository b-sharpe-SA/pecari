import { MANAGEMENT_PATH } from '@constants';
import {
    InstanceRessource,
    concatenateQueryParams,
    handleError,
} from '@helpers';
import {
    type AdminListTicketsQueryParams,
    type AdminRestrictedTicket,
    type WithPagination,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/tickets/`;

export class TicketsRessource extends InstanceRessource {
    /**
     * List tickets with filters
     * @param payload - { limit, offset, ordering, search, customer__id }
     * @returns
     */
    async list(queryParams: AdminListTicketsQueryParams) {
        try {
            const url = concatenateQueryParams(BASE_URL, queryParams ?? {});
            const { data } =
                await this.instance.get<WithPagination<AdminRestrictedTicket>>(
                    url
                );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get a ticket by id
     * @param id
     * @returns
     */
    async get(id: string) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } =
                await this.instance.get<AdminRestrictedTicket>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update a ticket by id
     * @param id
     * @returns
     */
    async update(id: string, ticket: Partial<AdminRestrictedTicket>) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.patch<AdminRestrictedTicket>(
                url,
                ticket
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete a ticket by id
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
