import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICoinDetailsDto } from "./dto";
import { EStorageKeys } from "$constants/storage.constants";

class FavouriteCoinsManager {
    private static instance: FavouriteCoinsManager;
    private coins: ICoinDetailsDto[] = [];

    private constructor() {
        // Initialize coins by fetching from AsyncStorage
        this.initializeCoins();
    }

    // Singleton instance getter
    public static getInstance(): FavouriteCoinsManager {
        if (!FavouriteCoinsManager.instance) {
            FavouriteCoinsManager.instance = new FavouriteCoinsManager();
        }
        return FavouriteCoinsManager.instance;
    }

    // Initialize coins by fetching from AsyncStorage
    private async initializeCoins(): Promise<void> {
        try {
            const response = await AsyncStorage.getItem(EStorageKeys.FAVOURITES_COINS);
            if (response) {
                const coins = JSON.parse(response) as ICoinDetailsDto[];
                if (Array.isArray(coins)) {
                    this.coins = coins;
                }
            }
        } catch (error) {
            console.error("Error initializing favorite coins:", error);
            this.coins = [];
        }
    }

    // Fetch all favorite coins (returns cached coins)
    public getFavouriteCoins(): ICoinDetailsDto[] {
        return this.coins;
    }

    // Add coins to favorites
    public async addCoinsToFavourites(coins: ICoinDetailsDto[]): Promise<void> {
        try {
            // Avoid duplicates by filtering out coins already in favorites
            const newCoinIds = coins.map(coin => coin.id);
            const updatedCoins = [
                ...this.coins.filter(coin => !newCoinIds.includes(coin.id)),
                ...coins,
            ];
            this.coins = updatedCoins;
            await AsyncStorage.setItem(EStorageKeys.FAVOURITES_COINS, JSON.stringify(this.coins));
        } catch (error) {
            console.error("Error adding coins to favorites:", error);
            throw error;
        }
    }

    // Delete coins from favorites
    public async deleteCoinsFromFavourites(coinIds: string[]): Promise<void> {
        try {
            this.coins = this.coins.filter(coin => !coinIds.includes(coin.id));
            await AsyncStorage.setItem(EStorageKeys.FAVOURITES_COINS, JSON.stringify(this.coins));
        } catch (error) {
            console.error("Error deleting coins from favorites:", error);
            throw error;
        }
    }

    // Check if a coin is in favorites
    public isCoinFavourite(coinId: string): boolean {
        console.log(this.coins.length, this.coins.some(coin => coin.id === coinId))
        return this.coins.some(coin => coin.id === coinId);
    }

    // Clear all favorite coins
    public async clearFavouriteCoins(): Promise<void> {
        try {
            this.coins = [];
            await AsyncStorage.removeItem(EStorageKeys.FAVOURITES_COINS);
        } catch (error) {
            console.error("Error clearing favorite coins:", error);
            throw error;
        }
    }
}

// Export singleton instance for global access
export const favouriteCoinsManager = FavouriteCoinsManager.getInstance();