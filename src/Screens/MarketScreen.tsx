import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabsScreenProps } from '@utils/navigation'

const MarketScreen : React.FC<BottomTabsScreenProps<'MarketScreen'>> = () => {
  return (
    <View>
      <Text>MarketScreen</Text>
    </View>
  )
}

export default MarketScreen

const styles = StyleSheet.create({})