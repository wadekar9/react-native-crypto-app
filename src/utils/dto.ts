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