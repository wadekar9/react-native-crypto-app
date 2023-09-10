import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { BottomTabsScreenProps } from '@utils/navigation';
import BaseLayout from '@components/BaseLayout';
import { Colors, Fonts, moderateScale } from '@utils/theme';
import BaseCoinListItem from '@components/BaseCoinListItem';
import { InvestmentBanner } from '@components/Banners';

const HomeScreen : React.FC<BottomTabsScreenProps<'HomeScreen'>> = ({ navigation }) => {
  return (
    <BaseLayout>
      <View style={{margin : moderateScale(10),marginBottom : 0}}>
        <InvestmentBanner />
      </View>
      <View style={{flex : 1}}>
        <Text style={styles.labelStyle}>Trending Coins</Text>
        <View style={{flex : 1}}>
          <FlatList
            data={[...new Array(6)]}
            keyExtractor={(_,index) =>  index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            scrollEventThrottle={16}
            bouncesZoom={false}
            legacyImplementation={true}
            accessibilityRole={'list'}
            accessible={true}
            alwaysBounceVertical={false}
            maxToRenderPerBatch={10}
            ItemSeparatorComponent={() => <View style={{marginVertical : moderateScale(5)}} />}
            contentContainerStyle={{flexGrow : 1,paddingVertical : moderateScale(8)}}
            renderItem={({item,index}) => <BaseCoinListItem key={`${index}`} item={item} index={index} />}
          />
        </View>
      </View>
    </BaseLayout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  labelStyle : {
    fontFamily : Fonts.CIRCULAR_STD_BOLD,
    fontSize : moderateScale(20),
    color : Colors.PRIMARY_BLACK_COLOR,
    textAlign : 'left',
    textTransform : 'capitalize',
    margin : moderateScale(10)
  }
})