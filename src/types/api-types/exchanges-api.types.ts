export interface IExchange {
    readonly id: string;
    readonly name: string;
    readonly year_established: number;
    readonly country: string;
    readonly description: string;
    readonly url: string;
    readonly image: string;
    readonly has_trading_incentive: boolean;
    readonly trust_score: number;
    readonly trust_score_rank: number;
    readonly trade_volume_24h_btc: number;
}