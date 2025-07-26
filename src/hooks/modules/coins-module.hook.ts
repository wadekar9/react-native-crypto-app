import { EStorageKeys } from "$constants/storage.constants";
import { IMarketCoin } from "$types/api-types/coins-module-api.types";
import apiService from "$utils/api";
import { ICoinDetailsDto } from "$utils/dto";
import { showErrorFlashMessage } from "$utils/helpers";
import { getStorageValue } from "$utils/storage";
import { useCallback, useEffect, useRef, useState } from "react"

export const useAllCoins = () => {

    const page = useRef(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [moreLoading, setMoreLoading] = useState<boolean>(true);
    const [coins, setCoins] = useState<IMarketCoin[]>([]);

    const fetchAllCoins = useCallback(async (pageNo: number) => {
        try {
            setLoading(true);
            const response = await apiService.fetchCoinsMarketApi({
                vs_currency: 'usd',
                page: pageNo,
                per_page: 10,
                sparkline: true,
                price_change_percentage: '7d'
            })
            if (response.length < 10) setMoreLoading(false);
            (pageNo == 1) ? setCoins(response) : setCoins((prev) => ([...prev, ...response]));
        } catch (error) {
            showErrorFlashMessage(error);
        } finally {
            setLoading(false);
        }
    }, [])

    const handleRefresh = useCallback(() => {
        setMoreLoading(true);
        fetchAllCoins(1)
        page.current = 1;
    }, [fetchAllCoins]);

    const handlePagination = useCallback(() => {
        if (coins.length > 0 && moreLoading) {
            fetchAllCoins(page.current + 1);
            page.current += 1;
        }
    }, [moreLoading, coins, fetchAllCoins]);

    useEffect(() => {
        fetchAllCoins(1);
    }, [])

    return { loading, coins, moreLoading, fetchAllCoins, handlePagination, handleRefresh };

}

export const useHighVolumeCoins = () => {

    const page = useRef(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [moreLoading, setMoreLoading] = useState<boolean>(true);
    const [coins, setCoins] = useState<IMarketCoin[]>([]);

    const fetchHighVolumeCoins = useCallback(async (pageNo: number) => {
        try {
            setLoading(true);
            const response = await apiService.fetchCoinsMarketApi({
                vs_currency: 'usd',
                order: 'volume_desc',
                page: pageNo,
                per_page: 10,
                sparkline: true,
                price_change_percentage: '7d'
            })
            if (response.length < 10) setMoreLoading(false);
            (pageNo == 1) ? setCoins(response) : setCoins((prev) => ([...prev, ...response]));
        } catch (error) {
            showErrorFlashMessage(error);
        } finally {
            setLoading(false);
        }
    }, [])

    const handleRefresh = useCallback(() => {
        setMoreLoading(true);
        fetchHighVolumeCoins(1)
        page.current = 1;
    }, [fetchHighVolumeCoins]);

    const handlePagination = useCallback(() => {
        if (coins.length > 0 && moreLoading) {
            fetchHighVolumeCoins(page.current + 1);
            page.current += 1;
        }
    }, [moreLoading, coins, fetchHighVolumeCoins]);

    useEffect(() => {
        fetchHighVolumeCoins(1);
    }, [])

    return { loading, coins, moreLoading, fetchHighVolumeCoins, handlePagination, handleRefresh };

}

export const useLowVolumeCoins = () => {

    const page = useRef(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [moreLoading, setMoreLoading] = useState<boolean>(true);
    const [coins, setCoins] = useState<IMarketCoin[]>([]);

    const fetchLowVolumeCoins = useCallback(async (pageNo: number) => {
        try {
            setLoading(true);
            const response = await apiService.fetchCoinsMarketApi({
                vs_currency: 'usd',
                order: 'volume_asc',
                page: pageNo,
                per_page: 10,
                sparkline: true,
                price_change_percentage: '7d'
            })
            if (response.length < 10) setMoreLoading(false);
            (pageNo == 1) ? setCoins(response) : setCoins((prev) => ([...prev, ...response]));
        } catch (error) {
            showErrorFlashMessage(error);
        } finally {
            setLoading(false);
        }
    }, [])

    const handleRefresh = useCallback(() => {
        setMoreLoading(true);
        fetchLowVolumeCoins(1);
        page.current = 1;
    }, [fetchLowVolumeCoins]);

    const handlePagination = useCallback(() => {
        if (coins.length > 0 && moreLoading) {
            fetchLowVolumeCoins(page.current + 1);
            page.current += 1;
        }
    }, [moreLoading, coins, fetchLowVolumeCoins]);

    useEffect(() => {
        fetchLowVolumeCoins(1);
    }, [])

    return { loading, coins, moreLoading, fetchLowVolumeCoins, handlePagination, handleRefresh };

}

export const useFavouriteCoins = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [coins, setCoins] = useState<ICoinDetailsDto[]>([]);

    const fetchFavouriteCoins = useCallback(async () => {
        try {
            setLoading(true);
            const response = await getStorageValue(EStorageKeys.FAVOURITES_COINS);
            if (response) {
                const result = JSON.parse(response) as Array<ICoinDetailsDto>;
                if (Array.isArray(result)) {
                    setCoins(result);
                } else {
                    setCoins([]);
                }
            }
        } catch (error) {
            showErrorFlashMessage(error);
        } finally {
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchFavouriteCoins();
    }, [])

    return { loading, coins, fetchFavouriteCoins };

}