import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabsScreenProps } from '@utils/navigation'

const HomeScreen : React.FC<BottomTabsScreenProps<'HomeScreen'>> = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})