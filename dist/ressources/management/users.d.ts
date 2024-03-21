import { InstanceRessource } from '../../helpers';
import { type WithPagination, type ListUsersQueryParams, type UsersAccount } from '../../types';
export declare class UsersRessource extends InstanceRessource {
    /**
     * List users with filters
     * @param payload - { limit, offset, ordering, search }
     * @returns access and refresh token
     */
    list(queryParams: ListUsersQueryParams): Promise<WithPagination<UsersAccount>>;
}
