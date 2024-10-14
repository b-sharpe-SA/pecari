import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';
import {
    type FieldsWithValidationFlags,
    type Customer,
    type UpdateCustomerPayload,
    type WithPagination,
} from '@types';

const BASE_URL = `${PUBLIC_PATH}/users/customer/`;

export class CustomerRessource extends InstanceRessource {
    /**
     * List all customers for current user
     * @returns List of customers
     */
    async list() {
        try {
            const { data } =
                await this.instance.get<WithPagination<Customer>>(BASE_URL);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get single customer based on reference
     * @param reference customer reference
     * @returns Customer
     */
    async get(reference: string) {
        try {
            const { data } = await this.instance.get<Customer>(
                `${BASE_URL}${reference}/`
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update customer based on reference
     * @param reference
     * @param payload
     * @returns Customer
     */
    async update(reference: string, payload: UpdateCustomerPayload) {
        try {
            const { data } = await this.instance.patch<Customer>(
                `${BASE_URL}${reference}/`,
                { ...payload }
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Call this endpoint to validate the flags of a customer
     * Mainly used during signup to validate a section
     * @param reference customer reference
     * @param flags array of flags to validate
     */
    async validateFlags(reference: string, flags: FieldsWithValidationFlags[]) {
        try {
            const { data } = await this.instance.post<Customer>(
                `${BASE_URL}${reference}/validate_flags/`,
                { flags }
            );
            return data;
        } catch (err) {
            throw handleError(err);
        }
    }
}
