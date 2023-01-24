import { cactusClient } from '@client';
import { handleError } from '@helpers';
import { Customer, UpdateCustomerPayload, WithPagination } from '@types';

export class CustomerRessource {
    async list() {
        try {
            const { data } = await cactusClient.instance.get<
                WithPagination<Customer>
            >('users/customer');
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    async get(reference: string) {
        try {
            const { data } = await cactusClient.instance.get<Customer>(
                `users/customer/${reference}`
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    async update(reference: string, payload: UpdateCustomerPayload) {
        try {
            const { data } = await cactusClient.instance.patch<Customer>(
                `users/customer/${reference}`,
                { ...payload }
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
