interface LoginTokenResponse {
    access: string;
    refresh: string;
}

interface LoginPayload {
    email: string
    password: string
}