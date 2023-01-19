import { cactusClient } from '@client';
import { handleError } from '@helpers';

export class LoginRessource {
    async token ({ email, password }: LoginPayload) {
        try {
            const { data } = await cactusClient.instance.post<LoginTokenResponse>('login/token/', { email, password })
            cactusClient.setToken(data.access);
            return data 
        }
        catch(error) {
            throw handleError(error)
        }
    }
}