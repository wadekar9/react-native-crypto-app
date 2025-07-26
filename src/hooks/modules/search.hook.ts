import { ISearch, ISearchCoin } from "$types/api-types";
import apiService from "$utils/api";
import { useState } from "react"

export const useSearch = () => {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [coins, setCoins] = useState<ISearchCoin[]>([]);

    async function handleSearch(query: string) {
        try {
            setSearchQuery(query);
            setLoading(true);
            const response = await apiService.searchQueriesApi(query);
            if (Array.isArray(response.coins)) {
                setCoins(response.coins);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return { loading, searchQuery, coins, handleSearch }
}