import { InstanceRessource } from '../../helpers';
import { type YapealEntry, type WithPagination, type ListYapealEntriesQueryParams } from '../../types';
export declare class YapealEntryRessource extends InstanceRessource {
    private getUrl;
    /**
     * List yapeal entries
     * @param reference customer reference
     * @returns
     */
    list(queryParams: ListYapealEntriesQueryParams): Promise<WithPagination<YapealEntry>>;
    /**
     * Get a yapeal entry
     * @param id yapeal entry id
     * @returns
     */
    get(id: string): Promise<YapealEntry>;
}
