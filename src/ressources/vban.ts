import { PUBLIC_PATH } from '@constants';
import {
    concatenateQueryParams,
    handleError,
    InstanceRessource,
} from '@helpers';
import {
    type CreateCustomerVbanPayload,
    type CustomerVBAN,
    type ListCustomerVbanParams,
    type WithPagination,
} from '@types';

export class CustomerVbanRessouce extends InstanceRessource {
    private getUrl(customerRef: string, vbanId?: number) {
        return `${PUBLIC_PATH}/users/customer/${customerRef}/vban/${vbanId ?? ''}`;
    }

    /**
     * List vbans for customer
     * @param customer Customer reference
     * @param params Query params
     * @returns
     */
    async list(customerRef: string, params: ListCustomerVbanParams) {
        try {
            const url = concatenateQueryParams(
                this.getUrl(customerRef),
                params
            );
            const { data } =
                await this.instance.get<WithPagination<CustomerVBAN>>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get vban by id for customer
     * @param customer_ref Customer reference
     * @param vban_id VBAN id
     * @returns
     */
    async get(customer: string, vbanId: number) {
        try {
            const url = this.getUrl(customer, vbanId);
            const { data } = await this.instance.get<CustomerVBAN>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Create a vban for customer
     * @param customer Customer reference
     * @returns
     */
    async create(customer: string, payload: CreateCustomerVbanPayload) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.post<CustomerVBAN>(
                url,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
