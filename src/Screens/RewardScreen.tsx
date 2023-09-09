import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabsScreenProps } from '@utils/navigation'

const RewardScreen : React.FC<BottomTabsScreenProps<'RewardScreen'>> = () => {
  return (
    <View>
      <Text>RewardScreen</Text>
    </View>
  )
}

export default RewardScreen

const styles = StyleSheet.create({})