import { InstanceRessource } from '@helpers';
import { TokenRessource } from './token';
import { UsersRessource } from './users';

export class ManagementRessource extends InstanceRessource {
    token = new TokenRessource(this);

    users = new UsersRessource(this);
}
