import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useCallback, useRef } from 'react';
import { BaseLayout, BaseSearchbar } from '$components/common';
import { styles } from './styles';
import { RootStackScreenProps } from '$types/navigation';
import { EStackScreens } from '$constants/screens.constants';
import { BackHeader } from '$components/navigation';
import { useSearch } from '$hooks/modules';
import { moderateScale } from '$constants/styles.constants';
import { SearchItemSkeleton } from '$components/skeleton';
import { ISearchCoin } from '$types/api-types';
import { CoinDetailsModal } from '$components/modals';

const Search: React.FC<RootStackScreenProps<EStackScreens.SEARCH>> = () => {

    const { loading, handleSearch, coins, searchQuery } = useSearch();
    const modalSheetRef = useRef<any>(null)

    const ListCoinItem = useCallback(({ item }: { item: ISearchCoin }) => (
        <TouchableOpacity activeOpacity={0.5} style={styles.coinItem} onPress={() => modalSheetRef.current?.open(item.id)}>
            <View style={styles.icon}>
                <Image source={{ uri: item.thumb }} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.coinInfo}>
                <Text style={styles.coinName}>{item.name}</Text>
                <Text style={styles.coinSymbol}>{item.symbol.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    ), []);

    return (
        <BaseLayout>
            <BackHeader headerName={'Search'} />
            <View style={styles.container}>
                <BaseSearchbar placeholder='Search coin here' onChange={handleSearch} />

                <View style={styles.wrapper}>

                    {(searchQuery.length !== 0 && loading) && (
                        <View style={{ gap: moderateScale(8) }}>
                            <SearchItemSkeleton key={'search-skeleton-1'} />
                            <SearchItemSkeleton key={'search-skeleton-2'} />
                            <SearchItemSkeleton key={'search-skeleton-3'} />
                            <SearchItemSkeleton key={'search-skeleton-4'} />
                        </View>
                    )}

                    {(!loading && searchQuery.length > 0) && (
                        <FlatList
                            data={coins}
                            renderItem={({ index, item }) => <ListCoinItem item={item} key={`${index}`} />}
                            keyExtractor={(item) => item.id}
                            ListEmptyComponent={<Text style={styles.emptyText}>No data found</Text>}
                            contentContainerStyle={styles.contentContainer}
                            scrollEventThrottle={16}
                        />
                    )}
                </View>
            </View>

            <CoinDetailsModal ref={modalSheetRef} />
        </BaseLayout>
    );
};

export default Search;