import { MANAGEMENT_PATH } from '@constants';
import {
    InstanceRessource,
    concatenateQueryParams,
    handleError,
} from '@helpers';
import {
    type WithPagination,
    type ListCustomersQueryParams,
    type AdminRestrictedCustomer,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/customers/`;

export class CustomersRessource extends InstanceRessource {
    /**
     * List users with filters
     * @param payload - { limit, offset, ordering, search }
     * @returns
     */
    async list(queryParams: ListCustomersQueryParams) {
        try {
            const url = concatenateQueryParams(BASE_URL, queryParams ?? {});
            const { data } =
                await this.instance.get<
                    WithPagination<AdminRestrictedCustomer>
                >(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get a customer by id
     * @param id
     * @returns
     */
    async get(id: string) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } =
                await this.instance.get<AdminRestrictedCustomer>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update a customer by id
     * @param id
     * @returns
     */
    async update(id: string, customer: Partial<AdminRestrictedCustomer>) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.patch<AdminRestrictedCustomer>(
                url,
                customer
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete a customer by id
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

    async uploadDocument(id: string, formData: FormData) {
        try {
            const url = `${BASE_URL}${id}/upload/`;
            const { data } = await this.instance.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
