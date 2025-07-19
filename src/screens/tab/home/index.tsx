import React from 'react'
import { Text, View, FlatList, ScrollView } from 'react-native'
import { BottomTabsScreenProps, navigationRef } from '$types/navigation';
import { moderateScale } from '$constants/styles.constants';
import { styles } from './styles';
import { EBottomTabScreens, EStackScreens } from '$constants/screens.constants';
import { BaseLayout, TextButton } from '$components/common';
import { BaseCoinListItem, BaseNFTListItem } from '$components/layouts';
import { useHomePageDetails } from '$hooks/modules';

const Home: React.FC<BottomTabsScreenProps<EBottomTabScreens.HOME>> = () => {

  const { details, loading, fetchHomeDetails } = useHomePageDetails();

  return (
    <BaseLayout>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        scrollEventThrottle={16}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.labelStyle}>Trending Cryptocurrencies</Text>
            <TextButton label='View All' onPress={() => navigationRef.current?.navigate(EStackScreens.TRENDING_COINS_NFTS, { coins: JSON.stringify(details.coins), nfts: JSON.stringify([]) })} />
          </View>
          <View style={styles.content}>
            {details.coins.slice(0, 5).map((coin, idx) => (
              <BaseCoinListItem key={`${idx}`} element={coin} />
            ))}
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.labelStyle}>Trending NFTs</Text>
            <TextButton label='View All' onPress={() => navigationRef.current?.navigate(EStackScreens.TRENDING_COINS_NFTS, { coins: JSON.stringify([]), nfts: JSON.stringify(details.nfts) })} />
          </View>
          <View style={styles.content}>
            {details.nfts.slice(0, 5).map((coin, idx) => (
              <BaseNFTListItem key={`${idx}`} element={coin} />
            ))}
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  )
}

export default Home