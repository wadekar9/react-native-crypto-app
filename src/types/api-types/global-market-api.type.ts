export interface IGlobalMarketData {
    readonly active_cryptocurrencies: number;
    readonly upcoming_icos: number;
    readonly ongoing_icos: number;
    readonly ended_icos: number;
    readonly markets: number;
    readonly total_market_cap: { [key: string]: number };
    readonly total_volume: { [key: string]: number };
    readonly market_cap_percentage: { [key: string]: number };
    readonly market_cap_change_percentage_24h_usd: number;
    readonly updated_at: number;
}

export interface IGlobalMarketApiResponse {
    readonly data: IGlobalMarketData;
}

