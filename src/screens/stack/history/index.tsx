import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { BottomTabsScreenProps, RootStackScreenProps } from '$types/navigation';
import BaseLayout from '$components/BaseLayout';
import { EColors, EFonts, moderateScale } from '$constants/styles.constants';
import { LeftChevron } from '$assets/icons';
import TransactionListItem from '$components/TransactionListItem';
import { InvestmentBanner } from '$components/Banners';
import { styles } from './styles';


const History: React.FC<RootStackScreenProps<'History'>> = ({ navigation }) => {
  return (
    <BaseLayout>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          accessibilityRole={'button'}
          accessible={true}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <LeftChevron />
        </TouchableOpacity>
        <View style={{ flex: 0.9, justifyContent: 'center' }}>
          <Text style={styles.headerName}>Transactions</Text>
        </View>
      </View>
      <View style={{ flex: 0.92 }}>
        <FlatList
          data={[...new Array(10)]}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={{ flexGrow: 1, padding: moderateScale(12) }}
          ItemSeparatorComponent={() => <View style={{ marginVertical: moderateScale(4) }} />}
          renderItem={({ item, index }) => <TransactionListItem index={index} item={item} />}
        />
      </View>
    </BaseLayout>
  )
}

export default History