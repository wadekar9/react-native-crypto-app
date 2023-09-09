import AsyncStorage from "@react-native-async-storage/async-storage"

export const AsyncStorageGetItem = async (KEY : string) => await AsyncStorage.getItem(KEY);

export const AsyncStorageSetItem = async (KEY : string, VALUE : null | undefined | any) => await AsyncStorage.setItem(KEY,JSON.stringify(VALUE));

export const AsyncStorageRemoveItem = async (KEY : string) => await AsyncStorage.removeItem(KEY);

export const AsyncStorageClear = async () => await AsyncStorage.clear();