import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';
import { PspBankAccount } from '@types';

const BASE_URL = `${PUBLIC_PATH}/banking/psp_bank_account/`;

export class PspBankAccountRessource extends InstanceRessource {
    /**
     * Get psp bank account by currency
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @returns
     */
    async byCurrency(customer: string, currency: string) {
        try {
            const url = `${BASE_URL}${customer}/by_currency/${currency}/`;
            const { data } = await this.instance.get<PspBankAccount>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get IBAN as PDF
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @param iban iban
     * @returns
     */
    async ibanPdf(customer: string, currency: string, iban: string) {
        try {
            const url = `${BASE_URL}${iban}/iban_pdf/${customer}/${currency}/`;
            const { data } = await this.instance.get<{ pdf: string }>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get employer document as PDF
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @param iban iban
     * @returns
     */
    async employerPdf(customer: string, currency: string, iban: string) {
        try {
            const url = `${BASE_URL}${iban}/employer_pdf/${customer}/${currency}/`;
            const { data } = await this.instance.get<{ pdf: string }>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
