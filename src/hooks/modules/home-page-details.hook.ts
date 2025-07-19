import { ITrendingApiResponse } from "$types/api-types";
import apiService from "$utils/api";
import { showErrorFlashMessage } from "$utils/helpers";
import { useEffect, useState } from "react";

export const useHomePageDetails = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [details, setDetails] = useState<ITrendingApiResponse>({
        coins: [],
        nfts: [],
        categories: []
    });

    async function fetchHomeDetails() {
        try {
            setLoading(true)
            const response = await apiService.fetchTrendingDataApi();
            setDetails(response);
        } catch (error) {
            showErrorFlashMessage(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchHomeDetails()
    }, []);

    return {
        details,
        loading,
        fetchHomeDetails
    }
}