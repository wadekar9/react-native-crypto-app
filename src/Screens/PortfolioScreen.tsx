import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabsScreenProps } from '@utils/navigation'

const PortfolioScreen : React.FC<BottomTabsScreenProps<'PortfolioScreen'>> = () => {
  return (
    <View>
      <Text>PortfolioScreen</Text>
    </View>
  )
}

export default PortfolioScreen

const styles = StyleSheet.create({})