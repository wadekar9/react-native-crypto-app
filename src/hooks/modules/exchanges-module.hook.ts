import { IExchange } from "$types/api-types";
import apiService from "$utils/api";
import { showErrorFlashMessage } from "$utils/helpers";
import { useCallback, useEffect, useRef, useState } from "react";

export const useCryptoExchanges = () => {

    const page = useRef(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [moreLoading, setMoreLoading] = useState<boolean>(true);
    const [exchanges, setExchanges] = useState<IExchange[]>([]);

    const fetchExchanges = useCallback(async (pageNo: number) => {
        try {
            setLoading(true);
            const response = await apiService.fetchExchangesApi({
                page: pageNo,
                per_page: 10
            })
            if (response.length < 10) setMoreLoading(false);
            (pageNo == 1) ? setExchanges(response) : setExchanges((prev) => ([...prev, ...response]));
        } catch (error) {
            showErrorFlashMessage(error);
        } finally {
            setLoading(false);
        }
    }, [])

    const handleRefresh = useCallback(() => {
        setMoreLoading(true);
        fetchExchanges(1)
        page.current = 1;
    }, [fetchExchanges]);

    const handlePagination = useCallback(() => {
        if (exchanges.length > 0 && moreLoading) {
            fetchExchanges(page.current + 1);
            page.current += 1;
        }
    }, [moreLoading, exchanges, fetchExchanges]);

    useEffect(() => {
        fetchExchanges(1);
    }, [])

    return { loading, exchanges, moreLoading, fetchExchanges, handlePagination, handleRefresh };

}