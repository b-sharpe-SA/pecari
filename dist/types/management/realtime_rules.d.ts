export declare enum RuleType {
    Service = "service",
    Customer = "customer"
}
export interface RealtimeRule {
    id: number;
    rule_type: RuleType;
    customer_group: string;
    customer_group_display: string;
    customer_type: string;
    customer_type_display: string;
    enabled: boolean;
    max_ticket_amount: number;
    max_opened_amount: number;
    max_opened_tickets: number;
    max_customer_opened_amount: number;
    max_customer_opened_tickets: number;
}
