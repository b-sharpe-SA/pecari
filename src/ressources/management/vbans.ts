import { MANAGEMENT_PATH } from '@constants';
import {
    concatenateQueryParams,
    handleError,
    InstanceRessource,
} from '@helpers';
import {
    type Vban,
    type WithPagination,
    type ListVbansQueryParams,
    type VbanDocument,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/customers/`;

export class VbanRessource extends InstanceRessource {
    private getUrl(customerReference: string, vbanId?: string) {
        return `${BASE_URL}${customerReference}/vban/${vbanId != null ? `${vbanId}/` : ''}`;
    }

    /**
     * List vbans for a customer
     * @param reference customer reference
     * @returns
     */
    async list(reference: string, queryParams: ListVbansQueryParams) {
        try {
            const url = concatenateQueryParams(
                this.getUrl(reference),
                queryParams ?? {}
            );
            const { data } = await this.instance.get<WithPagination<Vban>>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get a vban for a customer by id
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    async get(reference: string, id: string) {
        try {
            const url = this.getUrl(reference, id);
            const { data } = await this.instance.get<Vban>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Create a vban for a customer
     * @param reference customer reference
     * @returns
     */
    async create(reference: string) {
        try {
            const url = this.getUrl(reference);
            const { data } = await this.instance.post<Vban>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Enable a vban for a customer by id
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    async enable(reference: string, id: string) {
        try {
            const url = `${this.getUrl(reference, id)}enable/`;
            const { data } = await this.instance.patch<Vban>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Disable a vban for a customer by id
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    async disable(reference: string, id: string) {
        try {
            const url = `${this.getUrl(reference, id)}disable/`;
            const { data } = await this.instance.patch<Vban>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get the iban pdf for a vban
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    async ibanPdf(reference: string, id: string) {
        try {
            const url = `${this.getUrl(reference, id)}iban_pdf/`;
            const { data } = await this.instance.get<VbanDocument>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get the employer pdf for a vban
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    async employerPdf(reference: string, id: string) {
        try {
            const url = `${this.getUrl(reference, id)}employer_pdf/`;
            const { data } = await this.instance.get<VbanDocument>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
