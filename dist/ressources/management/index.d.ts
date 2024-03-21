import { InstanceRessource } from '../../helpers';
import { TokenRessource } from './token';
import { UsersRessource } from './users';
export declare class ManagementRessource extends InstanceRessource {
    token: TokenRessource;
    users: UsersRessource;
}
