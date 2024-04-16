import type { AlertStatus } from './rate-alert';
export interface RateAlertLegacy {
    id: number;
    rate_target: string;
    status: AlertStatus;
    creation_datetime: string;
    currency_pair: string;
}
export type CreateRateAlertLegacyPayload = Omit<RateAlertLegacy, 'id' | 'creation_datetime'>;
export type UpdateRateAlertLegacyPayload = Omit<RateAlertLegacy, 'id' | 'creation_datetime'>;
