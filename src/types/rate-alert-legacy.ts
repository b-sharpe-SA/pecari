import type { AlertStatus } from './rate-alert';

// Those types are created to maintain a single branch, but it will be removed once the rate alerts for mobile are redesigned.

export interface RateAlertLegacy {
    id: number;
    rate_target: string;
    status: AlertStatus;
    creation_datetime: string;
    currency_pair: string;
}

export type CreateRateAlertLegacyPayload = Omit<
    RateAlertLegacy,
    'id' | 'creation_datetime'
>;

export type UpdateRateAlertLegacyPayload = Omit<
    RateAlertLegacy,
    'id' | 'creation_datetime'
>;
