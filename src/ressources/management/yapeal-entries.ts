import { MANAGEMENT_PATH } from '@constants';
import {
    concatenateQueryParams,
    handleError,
    InstanceRessource,
} from '@helpers';
import {
    type YapealEntry,
    type WithPagination,
    type ListYapealEntriesQueryParams,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/yapeal-entries/`;

export class YapealEntryRessource extends InstanceRessource {
    private getUrl(yapealEntryId?: string) {
        return `${BASE_URL}${yapealEntryId != null ? `${yapealEntryId}/` : ''}`;
    }

    /**
     * List yapeal entries
     * @param reference customer reference
     * @returns
     */
    async list(queryParams: ListYapealEntriesQueryParams) {
        try {
            const url = concatenateQueryParams(this.getUrl(), queryParams);
            const { data } =
                await this.instance.get<WithPagination<YapealEntry>>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get a yapeal entry
     * @param id yapeal entry id
     * @returns
     */
    async get(id: string) {
        try {
            const url = this.getUrl(id);
            const { data } = await this.instance.get<YapealEntry>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
