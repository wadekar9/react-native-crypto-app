export interface ISearch {
    readonly coins: ISearchCoin[];
    readonly exchanges: ISearchExchange[];
    readonly icos: any[];
    readonly categories: ISearchCategory[];
    readonly nfts: ISearchNft[];
}

interface ISearchCategory {
    readonly id: string;
    readonly name: string;
}

export interface ISearchCoin {
    readonly id: string;
    readonly name: string;
    readonly api_symbol: string;
    readonly symbol: string;
    readonly market_cap_rank: number;
    readonly thumb: string;
    readonly large: string;
}

interface ISearchExchange {
    readonly id: string;
    readonly name: string;
    readonly market_type: string;
    readonly thumb: string;
    readonly large: string;
}

interface ISearchNft {
    readonly id: string;
    readonly name: string;
    readonly symbol: string;
    readonly thumb: string;
}