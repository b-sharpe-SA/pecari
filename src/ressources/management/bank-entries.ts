import { MANAGEMENT_PATH } from '@constants';
import {
    concatenateQueryParams,
    handleError,
    InstanceRessource,
} from '@helpers';
import {
    type BankEntry,
    type WithPagination,
    type ListBankEntriesQueryParams,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/bank-entries/`;

export class BankEntryRessource extends InstanceRessource {
    private getUrl(bankEntryId?: string) {
        return `${BASE_URL}${bankEntryId != null ? `${bankEntryId}/` : ''}`;
    }

    /**
     * List bank entries
     * @param reference customer reference
     * @returns
     */
    async list(queryParams: ListBankEntriesQueryParams) {
        try {
            const url = concatenateQueryParams(this.getUrl(), queryParams);
            const { data } =
                await this.instance.get<WithPagination<BankEntry>>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get a bank entry
     * @param id bank entry id
     * @returns
     */
    async get(id: string) {
        try {
            const url = this.getUrl(id);
            const { data } = await this.instance.get<BankEntry>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
