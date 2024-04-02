import { InstanceRessource } from '../../helpers';
import { TokenRessource } from './token';
import { UsersRessource } from './users';
import { CustomersRessource } from './customers';
export declare class ManagementRessource extends InstanceRessource {
    token: TokenRessource;
    users: UsersRessource;
    customers: CustomersRessource;
}
