/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';
import {
    type BeneficialOwner,
    type CreateBeneficialOwnerPayload,
    type UpdateBeneficialOwnerPayload,
    type WithPagination,
} from '@types';

export class BeneficialOwnerRessource extends InstanceRessource {
    private getUrl(customer: string, reference?: string) {
        return `${PUBLIC_PATH}/users/customer/${customer}/beneficial_owner/${
            reference ? `${reference}/` : ''
        }`;
    }

    /**
     * List beneficial owners for specific customer
     * @param customer Customer reference
     * @returns
     */
    async list(customer: string) {
        try {
            const url = this.getUrl(customer);
            const { data } =
                await this.instance.get<WithPagination<BeneficialOwner>>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Create beneficial owner for specific customer
     * @param customer Customer reference
     * @param payload Beneficial owner payload
     * @returns
     */
    async create(customer: string, payload: CreateBeneficialOwnerPayload) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.post<BeneficialOwner>(
                url,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update beneficial owner for specific customer
     * @param customer Customer reference
     * @param reference Beneficial owner reference
     * @param payload Beneficial owner payload
     * @returns
     */
    async update(
        customer: string,
        reference: string,
        payload: UpdateBeneficialOwnerPayload
    ) {
        try {
            const url = this.getUrl(customer, reference);
            const { data } = await this.instance.patch<BeneficialOwner>(
                url,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete beneficial owner
     * @param customer Customer reference
     * @param reference Beneficial owner reference
     * @returns
     */
    async delete(customer: string, reference: string) {
        try {
            const url = this.getUrl(customer, reference);
            const { data } = await this.instance.delete<BeneficialOwner>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
