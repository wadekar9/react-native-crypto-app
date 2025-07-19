export interface ITrendingCoin {
    readonly item: {
        readonly coin_id: number;
        readonly data: ITrendingCoinData;
        readonly id: string;
        readonly large: string;
        readonly market_cap_rank: number;
        readonly name: string;
        readonly price_btc: number;
        readonly score: number;
        readonly slug: string;
        readonly small: string;
        readonly symbol: string;
        readonly thumb: string;
    };
}


interface ITrendingCoinData {
    readonly content: { readonly description: string; readonly title: string; };
    readonly market_cap: string;
    readonly market_cap_btc: string;
    readonly price: number;
    readonly price_btc: string;
    readonly price_change_percentage_24h: { [key: string]: number };
    readonly sparkline: string;
    readonly total_volume: string;
    readonly total_volume_btc: string;
}

export interface ITrendingNFT {
    readonly id: string;
    readonly name: string;
    readonly symbol: string;
    readonly thumb: string;
    readonly nft_contract_id: number;
    readonly native_currency_symbol: string;
    readonly floor_price_in_native_currency: number;
    readonly floor_price_24h_percentage_change: number;
    readonly data: ITrendingNFTData;
}

interface ITrendingNFTData {
    readonly floor_price: string;
    readonly floor_price_in_usd_24h_percentage_change: string;
    readonly h24_volume: string;
    readonly h24_average_sale_price: string;
    readonly sparkline: string;
    readonly content: null;
}

export interface ITrendingCategory {
    readonly id: number;
    readonly name: string;
    readonly market_cap_1h_change: number;
    readonly slug: string;
    readonly coins_count: string;
    readonly data: ITrendingCategoryData;
}

interface ITrendingCategoryData {
    readonly market_cap: number;
    readonly market_cap_btc: number;
    readonly total_volume: number;
    readonly total_volume_btc: number;
    readonly market_cap_change_percentage_24h: { [key: string]: number };
    readonly sparkline: string;
}

export interface ITrendingApiResponse {
    coins: [];
    nfts: [];
    categories: [];
}