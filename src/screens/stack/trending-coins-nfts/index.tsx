import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { BaseLayout } from '$components/common'
import { RootStackScreenProps } from '$types/navigation'
import { EStackScreens } from '$constants/screens.constants'
import { BackHeader } from '$components/navigation'
import { styles } from './styles'
import { ITrendingCoin, ITrendingNFT } from '$types/api-types'
import { BaseCoinListItem, BaseNFTListItem } from '$components/layouts'

const TrendingCoinsNfts: React.FC<RootStackScreenProps<EStackScreens.TRENDING_COINS_NFTS>> = ({ route: { params: { coins, nfts } } }) => {

    const coinsArray: Array<ITrendingCoin> = JSON.parse(coins);
    const nftsArray: Array<ITrendingNFT> = JSON.parse(nfts);

    return (
        <BaseLayout>
            <BackHeader headerName={`Trending ${coinsArray.length > 0 ? 'Cryptocurrencies' : 'NFTs'}`} />
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {coinsArray.map((coin, idx) => (
                        <BaseCoinListItem key={`${idx}`} element={coin} />
                    ))}
                    {nftsArray.map((nft, idx) => (
                        <BaseNFTListItem key={`${idx}`} element={nft} />
                    ))}
                </ScrollView>
            </View>
        </BaseLayout>
    )
}

export default TrendingCoinsNfts