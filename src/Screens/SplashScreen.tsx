import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from '@utils/navigation';

const SplashScreen : React.FC<RootStackScreenProps<'SplashScreen'>> = ({ navigation, route }) => {

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({})