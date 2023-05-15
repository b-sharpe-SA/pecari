export declare enum AlertStatus {
    Active = "active",
    Closed = "closed",
    Disable = "disable"
}
export interface RateAlert {
    id: number;
    rate_target: string;
    status: AlertStatus;
    creation_datetime: string;
    currency_pair: string;
}
export type CreateRateAlertPayload = Omit<RateAlert, 'id' | 'creation_datetime'>;
export type UpdateRateAlertPayload = Omit<RateAlert, 'id' | 'creation_datetime'>;
