import { MANAGEMENT_PATH } from '@constants';
import { InstanceRessource, handleError } from '@helpers';
import { type TermsOfUse } from '@types';

export class TermsOfUseRessource extends InstanceRessource {
    private getUrl(customerId: string, termsOfUseId?: string) {
        return `${MANAGEMENT_PATH}/customers/${customerId}/terms_of_use/${termsOfUseId != null ? `${termsOfUseId}/` : ''}`;
    }

    /**
     * List terms of use for a customer
     * @returns
     */
    async list(customerId: string) {
        try {
            const { data } = await this.instance.get<TermsOfUse>(
                this.getUrl(customerId)
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get a single terms of use for a customer
     * @returns
     */
    async get(customerId: string, termsOfUseId: string) {
        try {
            const { data } = await this.instance.get<TermsOfUse>(
                this.getUrl(customerId, termsOfUseId)
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete a terms of use for a customer
     * @returns
     */
    async delete(customerId: string, termsOfUseId: string) {
        try {
            const { data } = await this.instance.delete(
                this.getUrl(customerId, termsOfUseId)
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Generate a new unsigned contract for a customer
     * @returns
     */
    async generate(customerId: string) {
        try {
            const { data } = await this.instance.post(
                `${this.getUrl(customerId)}generate/`
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Upload a new terms of use for a customer
     * @returns
     */
    async upload(customerId: string, formData: FormData) {
        try {
            const { data } = await this.instance.post(
                `${this.getUrl(customerId)}upload/`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
