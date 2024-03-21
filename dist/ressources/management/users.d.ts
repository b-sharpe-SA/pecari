import { InstanceRessource } from '../../helpers';
import { type WithPagination, type ListUsersQueryParams, type UsersAccount, type CreateUserAccountPayload } from '../../types';
export declare class UsersRessource extends InstanceRessource {
    /**
     * List users with filters
     * @param payload - { limit, offset, ordering, search }
     * @returns
     */
    list(queryParams: ListUsersQueryParams): Promise<WithPagination<UsersAccount>>;
    /**
     * Create a user in cactus
     * @param payload { email, password }
     * @returns
     */
    create(payload: CreateUserAccountPayload): Promise<UsersAccount>;
}
