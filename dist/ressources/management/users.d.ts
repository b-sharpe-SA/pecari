import { InstanceRessource } from '../../helpers';
import { type WithPagination, type Myself } from '../../types';
interface ListUsersQueryParams extends Record<string, any> {
    limit: number;
    offset: number;
    ordering: string;
    search: string;
}
export declare class UsersRessource extends InstanceRessource {
    /**
     * List users with filters
     * @param payload - { limit, offset, ordering, search }
     * @returns access and refresh token
     */
    list(queryParams: ListUsersQueryParams): Promise<WithPagination<Myself>>;
}
export {};
