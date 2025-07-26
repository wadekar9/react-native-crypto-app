export interface PaginationDto {
    per_page?: number;
    page?: number;
}

export interface CoinsMarketDto extends PaginationDto {
    vs_currency: string;
    ids?: string;
    names?: string;
    symbols?: string;
    category?: string;
    include_tokens?: 'top' | 'all';
    order?: 'market_cap_asc' | 'market_cap_desc' | 'volume_desc' | 'volume_asc' | 'id_desc' | 'id_asc';
    sparkline?: boolean;
    price_change_percentage?: '1h' | '24h' | '7d' | '14d' | '30d' | '200d' | '1y';
    locale?: string;
    precision?: 'full' | string;
}

export interface CoinsListDto {
    include_platform?: boolean
}

export interface ExchangesListDto {
    status?: 'active' | 'inactive'
}

export interface ExchangesTikcersDto {
    coin_ids?: string;
    include_exchange_logo?: boolean;
    page?: number;
    depth?: boolean;
    order?: 'true_score_asc' | 'true_score_desc' | 'volume_asc' | 'volume_desc' | 'base_target';
    dex_pair_format?: 'contract_address' | 'symbol';
}

export interface CoinsHistoricalDataDto {
    date: string; //dd-mm-yyyy
    localization?: boolean;
}

export interface CoinsMarketChartDto {
    vs_currency: string;
    days: string;
    interval?: 'daily';
    precision?: 'full' | string;
}

export interface CoinsMarketChartRangeDto {
    vs_currency: string;
    from: number;
    to: number;
    precision?: 'full' | string;
}

export interface CoinTickersDto extends Omit<ExchangesTikcersDto, 'coin_ids'> {
    exchange_ids?: string;
}

export interface CoinDataDto extends Pick<ExchangesTikcersDto, 'dex_pair_format'> {
    localization?: boolean;
    tickers?: boolean;
    market_data?: boolean;
    community_data?: boolean;
    developer_data?: boolean;
    sparkline?: boolean;
}

export interface ICoinPriceSimpleDto {
    ids: string;
    vs_currencies: string;
}

export interface ICoinChartData {
    readonly prices: Array<number[]>;
    readonly market_caps: Array<number[]>;
    readonly total_volumes: Array<number[]>;
}

export interface ICoinDetails {
    readonly id: string;
    readonly symbol: string;
    readonly name: string;
    readonly web_slug: string;
    readonly asset_platform_id: null;
    readonly platforms: {
        readonly "": string;
    };
    readonly detail_platforms: {
        readonly "": {
            readonly decimal_place: null;
            readonly contract_address: string;
        };
    };
    readonly block_time_in_minutes: number;
    readonly hashing_algorithm: string;
    readonly categories: string[];
    readonly preview_listing: boolean;
    readonly public_notice: null;
    readonly additional_notices: any[];
    readonly description: {
        readonly en: string;
    };
    readonly links: {
        readonly homepage: string[];
        readonly whitepaper: string;
        readonly blockchain_site: string[];
        readonly official_forum_url: string[];
        readonly chat_url: any[];
        readonly announcement_url: any[];
        readonly snapshot_url: null;
        readonly twitter_screen_name: string;
        readonly facebook_username: string;
        readonly bitcointalk_thread_identifier: null;
        readonly telegram_channel_identifier: string;
        readonly subreddit_url: string;
        readonly repos_url: {
            readonly github: string[];
            readonly bitbucket: any[];
        };
    };
    readonly image: {
        readonly thumb: string;
        readonly small: string;
        readonly large: string;
    };
    readonly country_origin: string;
    readonly genesis_date: Date;
    readonly sentiment_votes_up_percentage: number;
    readonly sentiment_votes_down_percentage: number;
    readonly watchlist_portfolio_users: number;
    readonly market_cap_rank: number;
    readonly market_data: CoinDetailsMarketData;
    readonly status_updates: any[];
    readonly last_updated: Date;
}
interface CoinDetailsMarketData {
    readonly current_price: { [key: string]: number };
    readonly total_value_locked: null;
    readonly mcap_to_tvl_ratio: null;
    readonly fdv_to_tvl_ratio: null;
    readonly roi: null;
    readonly ath: { [key: string]: number };
    readonly ath_change_percentage: { [key: string]: number };
    readonly ath_date: { [key: string]: Date };
    readonly atl: { [key: string]: number };
    readonly atl_change_percentage: { [key: string]: number };
    readonly atl_date: { [key: string]: Date };
    readonly market_cap: { [key: string]: number };
    readonly market_cap_rank: number;
    readonly fully_diluted_valuation: { [key: string]: number };
    readonly market_cap_fdv_ratio: number;
    readonly total_volume: { [key: string]: number };
    readonly high_24h: { [key: string]: number };
    readonly low_24h: { [key: string]: number };
    readonly price_change_24h: number;
    readonly price_change_percentage_24h: number;
    readonly price_change_percentage_7d: number;
    readonly price_change_percentage_14d: number;
    readonly price_change_percentage_30d: number;
    readonly price_change_percentage_60d: number;
    readonly price_change_percentage_200d: number;
    readonly price_change_percentage_1y: number;
    readonly market_cap_change_24h: number;
    readonly market_cap_change_percentage_24h: number;
    readonly price_change_24h_in_currency: { [key: string]: number };
    readonly price_change_percentage_1h_in_currency: { [key: string]: number };
    readonly price_change_percentage_24h_in_currency: { [key: string]: number };
    readonly price_change_percentage_7d_in_currency: { [key: string]: number };
    readonly price_change_percentage_14d_in_currency: { [key: string]: number };
    readonly price_change_percentage_30d_in_currency: { [key: string]: number };
    readonly price_change_percentage_60d_in_currency: { [key: string]: number };
    readonly price_change_percentage_200d_in_currency: { [key: string]: number };
    readonly price_change_percentage_1y_in_currency: { [key: string]: number };
    readonly market_cap_change_24h_in_currency: { [key: string]: number };
    readonly market_cap_change_percentage_24h_in_currency: { [key: string]: number };
    readonly total_supply: number;
    readonly max_supply: number;
    readonly max_supply_infinite: boolean;
    readonly circulating_supply: number;
    readonly last_updated: Date;
}