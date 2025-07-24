import { IExchange, ISimpleCoinPriceApiResponse, ITrendingApiResponse } from '$types/api-types';
import { IMarketCoin } from '$types/api-types/coins-module-api.types';
import { IGlobalMarketApiResponse } from '$types/api-types/global-market-api.type';
import { axiosInstance } from './axios-instance';
import {
    CoinDataDto,
    CoinsHistoricalDataDto,
    CoinsListDto,
    CoinsMarketChartDto,
    CoinsMarketChartRangeDto,
    CoinsMarketDto,
    CoinTickersDto,
    ExchangesListDto,
    ExchangesTikcersDto,
    ICoinPriceSimpleDto,
    PaginationDto
} from './dto';
import { convertToQueryParams } from './helpers';

const API_ENDPOINTS = {
    COINS: '/coins',
    COINS_MARKET: '/coins/markets',
    COINS_LIST: '/coins/list',
    PING: '/ping',
    SEARCH: '/search',
    CATEGORIES: '/categories',
    EXCHANGE_RATES: '/exchange_rates',
    EXCHANGES: '/exchanges',
    EXCHANGE_LIST: '/exchanges/list',
    TRENDING: '/search/trending',
    GLOBAL: '/global',
    PRICE: '/simple/price'
} as const;

// Generic request handler to reduce repetition
const makeRequest = async <T>(endpoint: string, params?: Record<string, any>): Promise<T> => {
    try {
        const query = params ? convertToQueryParams(params) : '';
        const response = await axiosInstance.get(`${endpoint}${query}`);
        if (response.data) return response.data;
        throw new Error(response.statusText);
    } catch (error: any) {
        throw new Error(error.message || 'Request failed');
    }
};


const apiService = {
    // Fetch all coins market data
    fetchCoinsMarketApi: (params: CoinsMarketDto) => makeRequest<Array<IMarketCoin>>(API_ENDPOINTS.COINS_MARKET, params),

    // Fetch coins list
    fetchCoinsListApi: (params: CoinsListDto) => makeRequest<unknown>(API_ENDPOINTS.COINS_LIST, params),

    // Search coins and other entities
    searchQueriesApi: (query: string) => makeRequest<unknown>(`${API_ENDPOINTS.SEARCH}?query=${query}`),

    // Ping the API
    pingTheApiApi: () => makeRequest<unknown>(API_ENDPOINTS.PING),

    // Fetch exchange rates
    fetchExchangesRatesApi: () => makeRequest<unknown>(API_ENDPOINTS.EXCHANGE_RATES),

    // Fetch exchanges with pagination
    fetchExchangesApi: (params: PaginationDto) => makeRequest<Array<IExchange>>(API_ENDPOINTS.EXCHANGES, params),

    // Fetch exchanges list
    fetchExchangesListApi: (params: ExchangesListDto) => makeRequest<unknown>(API_ENDPOINTS.EXCHANGE_LIST, params),

    // Fetch exchange tickers
    fetchExchangeTickersApi: (id: string, params: ExchangesTikcersDto) => makeRequest<unknown>(`${API_ENDPOINTS.EXCHANGES}/${id}/tickers`, params),

    // Fetch exchange data
    fetchExchangeDataApi: (id: string, params: Pick<ExchangesTikcersDto, 'dex_pair_format'>) => makeRequest<unknown>(`${API_ENDPOINTS.EXCHANGES}/${id}/tickers`, params),

    // Fetch categories
    fetchCategoriesApi: () => makeRequest<unknown>(API_ENDPOINTS.CATEGORIES),

    // Fetch coin historical data
    fetchCoinHistoricalDataApi: (id: string, params: CoinsHistoricalDataDto) => makeRequest<unknown>(`${API_ENDPOINTS.COINS}/${id}/history`, params),

    // Fetch coin market chart
    fetchCoinMarketChartApi: (id: string, params: CoinsMarketChartDto) => makeRequest<unknown>(`${API_ENDPOINTS.COINS}/${id}/market_chart`, params),

    // Fetch coin market chart within range
    fetchCoinMarketChartWithinRangeApi: (id: string, params: CoinsMarketChartRangeDto) => makeRequest<unknown>(`${API_ENDPOINTS.COINS}/${id}/market_chart/range`, params),

    // Fetch coin tickers
    fetchCoinTickersApi: (id: string, params: CoinTickersDto) => makeRequest<unknown>(`${API_ENDPOINTS.COINS}/${id}/tickers`, params),

    // Fetch single coin data
    fetchCoinDataApi: (id: string, params: CoinDataDto) => makeRequest<unknown>(`${API_ENDPOINTS.COINS}/${id}`, params),

    // Fetch trending coins and NFTs
    fetchTrendingDataApi: () => makeRequest<ITrendingApiResponse>(API_ENDPOINTS.TRENDING),

    // Fetch trending coins and NFTs
    fetchGlobalMarketDataApi: () => makeRequest<IGlobalMarketApiResponse>(API_ENDPOINTS.GLOBAL),

    // Fetch price
    fetchCoinsPricesApi: (params: ICoinPriceSimpleDto) => makeRequest<ISimpleCoinPriceApiResponse>(API_ENDPOINTS.PRICE, params)
};

export default apiService;