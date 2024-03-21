import { type LoginPayload } from '../login';

export interface ManagementLoginPayload extends LoginPayload {
    otp_code: string;
}
