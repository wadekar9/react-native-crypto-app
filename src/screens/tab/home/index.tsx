import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { BottomTabsScreenProps } from '$types/navigation';
import BaseLayout from '$components/BaseLayout';
import { EColors, EFonts, moderateScale } from '$constants/styles.constants';
import BaseCoinListItem from '$components/BaseCoinListItem';
import { InvestmentBanner } from '$components/Banners';
import { styles } from './styles';

const Home: React.FC<BottomTabsScreenProps<'Home'>> = ({ navigation }) => {

  return (
    <BaseLayout>
      <View style={{ margin: moderateScale(10), marginBottom: 0 }}>
        <InvestmentBanner />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.labelStyle}>Trending Coins</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={[...new Array(6)]}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            scrollEventThrottle={16}
            bouncesZoom={false}
            legacyImplementation={true}
            accessibilityRole={'list'}
            accessible={true}
            alwaysBounceVertical={false}
            maxToRenderPerBatch={10}
            ItemSeparatorComponent={() => <View style={{ marginVertical: moderateScale(5) }} />}
            contentContainerStyle={{ flexGrow: 1, paddingVertical: moderateScale(8) }}
            renderItem={({ item, index }) => <BaseCoinListItem key={`${index}`} item={item} index={index} />}
          />
        </View>
      </View>
    </BaseLayout>
  )
}

export default Home