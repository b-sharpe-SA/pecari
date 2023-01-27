import { handleError, InstanceRessource } from '@helpers';
import { Customer, UpdateCustomerPayload, WithPagination } from '@types';

export class CustomerRessource extends InstanceRessource {
    /**
     * List all customers for current user
     * @returns List of customers
     */
    async list() {
        try {
            const { data } = await this.instance.get<WithPagination<Customer>>(
                'users/customer'
            );
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
                `users/customer/${reference}`
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
                `users/customer/${reference}`,
                { ...payload }
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
