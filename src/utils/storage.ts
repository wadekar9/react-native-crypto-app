import AsyncStorage from "@react-native-async-storage/async-storage"

export const getStorageValue = async (KEY: string) => await AsyncStorage.getItem(KEY);

export const setStorageValue = async (KEY: string, VALUE: null | undefined | any) => await AsyncStorage.setItem(KEY, JSON.stringify(VALUE));

export const removeStorageItem = async (KEY: string) => await AsyncStorage.removeItem(KEY);

export const clearStorage = async () => await AsyncStorage.clear();