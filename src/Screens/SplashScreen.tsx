import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { RootStackScreenProps } from '@utils/navigation';
import { LogoIcon } from '@assets/icons';
import BaseLayout from '@components/BaseLayout';

const SplashScreen : React.FC<RootStackScreenProps<'SplashScreen'>> = ({ navigation, route }) => {

  useEffect(() => {
    setTimeout(() => navigation.replace('BottomNavigator'),2000);
  },[]);

  return (
    <BaseLayout>
      <View style={{flex : 1,alignItems:'center',justifyContent:'center'}}>
        <LogoIcon />
      </View>
    </BaseLayout>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({})