export interface IMarketCoin {
    readonly id: string;
    readonly symbol: string;
    readonly name: string;
    readonly image: string;
    readonly current_price: number;
    readonly market_cap: number;
    readonly market_cap_rank: number;
    readonly fully_diluted_valuation: number;
    readonly total_volume: number;
    readonly high_24h: number;
    readonly low_24h: number;
    readonly price_change_24h: number;
    readonly price_change_percentage_24h: number;
    readonly market_cap_change_24h: number;
    readonly market_cap_change_percentage_24h: number;
    readonly circulating_supply: number;
    readonly total_supply: number;
    readonly max_supply: number;
    readonly ath: number;
    readonly ath_change_percentage: number;
    readonly ath_date: Date;
    readonly atl: number;
    readonly atl_change_percentage: number;
    readonly atl_date: Date;
    readonly roi: null;
    readonly last_updated: Date;
    readonly sparkline_in_7d: { readonly price: number[]; };
    readonly price_change_percentage_24h_in_currency: number;
    readonly price_change_percentage_7d_in_currency: number;
}