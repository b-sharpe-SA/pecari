export declare class LoginRessource {
    token({ email, password }: LoginPayload): Promise<LoginTokenResponse>;
}
