import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { BaseLayout } from '$components/common'
import { styles } from './styles';
import { ExchangeListItem, ListPaginationLoader } from '$components/layouts';
import { BackHeader } from '$components/navigation';
import { RootStackScreenProps } from '$types/navigation';
import { EStackScreens } from '$constants/screens.constants';
import { useCryptoExchanges } from '$hooks/modules';
import { ExchangeListItemSkeleton } from '$components/skeleton';
import { EmptyListCommonPage } from '$components/pages';

const Exchanges: React.FC<RootStackScreenProps<EStackScreens.EXCHANGES>> = () => {

    const { exchanges, moreLoading, loading, handlePagination, handleRefresh } = useCryptoExchanges();

    const ListEmptyComponent = useCallback(() => {
        if (moreLoading && exchanges.length == 0) {
            return (
                <View style={{ flex: 1, flexGrow: 1 }}>
                    {Array.from({ length: 10 }).map((_, idx) => <ExchangeListItemSkeleton key={`${idx}`} />)}
                </View>
            )
        }
        return <EmptyListCommonPage />;
    }, [loading, exchanges, moreLoading])

    return (
        <BaseLayout>
            <BackHeader headerName={'Exchanges'} />
            <View style={styles.container}>

                <FlatList
                    data={exchanges}
                    renderItem={({ item, index }) => <ExchangeListItem element={item} key={`${index}`} />}
                    keyExtractor={(_, idx) => idx.toString()}
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                    scrollEventThrottle={16}
                    initialNumToRender={10}
                    ListEmptyComponent={<ListEmptyComponent />}
                    onEndReachedThreshold={0.1}
                    onEndReached={handlePagination}
                    onRefresh={handleRefresh}
                    refreshing={false}
                    ListFooterComponent={() => (exchanges.length != 0 && moreLoading) ? <ListPaginationLoader /> : null}
                />
            </View>
        </BaseLayout>
    )
}

export default Exchanges