/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
    concatenateQueryParams,
    handleError,
    InstanceRessource,
} from '@helpers';
import {
    BankAccount,
    Beneficiary,
    type CreateBankAccountPayload,
    type CreateBeneficiaryPayload,
    type ListBeneficiaryQueryParams,
    WithPagination,
} from '@types';

export class BeneficiaryRessource extends InstanceRessource {
    private readonly getUrl = (customer: string, reference?: string) => {
        return `/users/customer/${customer}/beneficiary/${
            reference ? `${reference}/` : ''
        }`;
    };

    /**
     * List beneficiaries for specific customer
     * @param customer Customer reference
     * @param queryParams
     * @returns
     */
    async list(customer: string, queryParams?: ListBeneficiaryQueryParams) {
        try {
            const url = concatenateQueryParams(
                this.getUrl(customer),
                queryParams ?? {}
            );
            const { data } =
                await this.instance.get<WithPagination<Beneficiary>>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Create beneficiary for specific customer
     * @param customer Customer reference
     * @param payload Beneficiary payload
     * @returns
     */
    async create(customer: string, payload: CreateBeneficiaryPayload) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.post<Beneficiary>(
                url,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    async upload(customer: string, reference: string, file: File | FormData) {
        try {
            const url = `${this.getUrl(customer, reference)}upload/`;
            const { data } = await this.instance.post(url, file, {
                headers:
                    file instanceof File
                        ? {
                              'Content-Type': file.type,
                              'Content-Disposition': `attachment; filename=${file.name}`,
                          }
                        : {
                              'Content-Type': 'multipart/form-data',
                          },
            });
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete beneficiary
     * @param customer Customer reference
     * @param reference Beneficiary reference
     * @returns
     */
    async delete(customer: string, reference: string) {
        try {
            const url = this.getUrl(customer, reference);
            const { data } = await this.instance.delete<Beneficiary>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Create bank account for customer and beneficiary
     * @param customer Customer reference
     * @param reference Beneficiary reference
     * @param payload Bank account payload
     * @returns
     */
    async createBankAccount(
        customer: string,
        reference: string,
        payload: CreateBankAccountPayload
    ) {
        try {
            const url = this.getUrl(customer, reference);
            const { data } = await this.instance.post<BankAccount>(
                `${url}bank_account/`,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Delete bank account
     * @param customer Customer reference
     * @param beneficiaryReference Beneficiary reference
     * @param bankAccountReference Bank account reference
     * @returns
     */
    async deleteBankAccount(
        customer: string,
        beneficiaryReference: string,
        bankAccountReference: string
    ) {
        try {
            const url = this.getUrl(customer, beneficiaryReference);
            const { data } = await this.instance.delete<BankAccount>(
                `${url}bank_account/${bankAccountReference}/`
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
