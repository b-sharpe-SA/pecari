import { MANAGEMENT_PATH } from '@constants';
import {
    InstanceRessource,
    concatenateQueryParams,
    handleError,
} from '@helpers';
import {
    type WithPagination,
    type ListUsersQueryParams,
    type AdminRestrictedUser,
    type CreateUserAccountPayload,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/users/`;

export class UsersRessource extends InstanceRessource {
    /**
     * List users with filters
     * @param payload - { limit, offset, ordering, search }
     * @returns
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    async list(queryParams: ListUsersQueryParams) {
        try {
            const url = concatenateQueryParams(BASE_URL, queryParams ?? {});
            const { data } =
                await this.instance.get<WithPagination<AdminRestrictedUser>>(
                    url
                );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Create a user in cactus
     * @param payload { email, password }
     * @returns
     */
    async create(payload: CreateUserAccountPayload) {
        try {
            const { data } = await this.instance.post<AdminRestrictedUser>(
                BASE_URL,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update a user by id
     * @param id
     * @param payload
     * @returns
     */
    async update(id: string, payload: Partial<AdminRestrictedUser>) {
        try {
            const { data } = await this.instance.patch<AdminRestrictedUser>(
                `${BASE_URL}${id}/`,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
