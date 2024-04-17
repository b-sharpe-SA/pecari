import { MANAGEMENT_PATH } from '@constants';
import {
    InstanceRessource,
    concatenateQueryParams,
    handleError,
} from '@helpers';
import {
    type WithPagination,
    type ListCustomersQueryParams,
    type AdminRestrictedBeneficiary,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/beneficiaries/`;

export class BeneficiariesRessource extends InstanceRessource {
    /**
     * List beneficiaries with filters
     * @param payload - { limit, offset, ordering, search }
     * @returns
     */
    async list(queryParams: ListCustomersQueryParams) {
        try {
            const url = concatenateQueryParams(BASE_URL, queryParams ?? {});
            const { data } =
                await this.instance.get<
                    WithPagination<AdminRestrictedBeneficiary>
                >(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get a beneficiary by id
     * @param id
     * @returns
     */
    async get(id: string) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } =
                await this.instance.get<AdminRestrictedBeneficiary>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update a beneficiary by id
     * @param id
     * @returns
     */
    async update(id: string, beneficiary: Partial<AdminRestrictedBeneficiary>) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } =
                await this.instance.patch<AdminRestrictedBeneficiary>(
                    url,
                    beneficiary
                );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete a beneficary by id
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
