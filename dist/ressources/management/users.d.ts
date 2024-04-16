import { InstanceRessource } from '../../helpers';
import { type WithPagination, type ListUsersQueryParams, type AdminRestrictedUser, type CreateUserAccountPayload } from '../../types';
export declare class UsersRessource extends InstanceRessource {
    /**
     * List users with filters
     * @param payload - { limit, offset, ordering, search }
     * @returns
     */
    list(queryParams: ListUsersQueryParams): Promise<WithPagination<AdminRestrictedUser>>;
    /**
     * Create a user in cactus
     * @param payload { email, password }
     * @returns
     */
    create(payload: CreateUserAccountPayload): Promise<AdminRestrictedUser>;
    /**
     * Update a user by id
     * @param id
     * @param payload
     * @returns
     */
    update(id: string, payload: Partial<AdminRestrictedUser>): Promise<AdminRestrictedUser>;
}
