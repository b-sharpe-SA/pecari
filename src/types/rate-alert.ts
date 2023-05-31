export enum AlertStatus {
    Active = 'active',
    Closed = 'closed',
    Disable = 'disable',
}

export interface RateAlert {
    id: number;
    rate_targets: string[];
    status: AlertStatus;
    creation_datetime: string;
    currency_pair: string;
}

export type CreateRateAlertPayload = Omit<
    RateAlert,
    'id' | 'creation_datetime' | 'rate_targets'
>;

export type UpdateRateAlertPayload = Pick<RateAlert, 'rate_targets'>;
