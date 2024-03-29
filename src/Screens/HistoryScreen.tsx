import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { BottomTabsScreenProps, RootStackScreenProps } from '@utils/navigation';
import BaseLayout from '@components/BaseLayout';
import { Colors, Fonts, moderateScale } from '@utils/theme';
import { LeftChevron } from '@assets/icons';
import TransactionListItem from '@components/TransactionListItem';
import { InvestmentBanner } from '@components/Banners';


const HistoryScreen : React.FC<RootStackScreenProps<'HistoryScreen'>> = ({ navigation }) => {
  return (
    <BaseLayout>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{
            flex : 0.1,
            alignItems : 'center',
            justifyContent : 'center'
          }}
          accessibilityRole={'button'}
          accessible={true}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <LeftChevron />
        </TouchableOpacity>
        <View style={{flex : 0.9,justifyContent : 'center'}}>
          <Text style={styles.headerName}>Transactions</Text>
        </View>
      </View>
      <View style={{flex : 0.92}}>
        <FlatList
          data={[...new Array(10)]}
          keyExtractor={(_,index) => index.toString()}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={{flexGrow : 1,padding : moderateScale(12)}}
          ItemSeparatorComponent={() => <View style={{marginVertical : moderateScale(4)}} />}
          renderItem={({item,index}) => <TransactionListItem index={index} item={item} />}
        />
      </View>
    </BaseLayout>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  headerName : {
    fontFamily : Fonts.CIRCULAR_STD_MEDIUM,
    fontSize : moderateScale(16),
    color : Colors.PRIMARY_BLACK_COLOR
  },
  headerContainer : {
    flex : 0.08,
    flexDirection : 'row',
    alignItems : 'stretch',
    zIndex : 2000,
    elevation : 2,
    shadowColor : Colors.PRIMARY_BLACK_COLOR,
    backgroundColor : Colors.BACKGROUND_COLOR
  }
})