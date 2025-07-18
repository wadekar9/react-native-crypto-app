import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { RootStackScreenProps } from '$types/navigation';
import { LogoIcon } from '$assets/icons';
import BaseLayout from '$components/BaseLayout';
import { EStackScreens } from '$constants/screens.contants';

const Splash: React.FC<RootStackScreenProps<EStackScreens.SPLASH>> = ({ navigation, route }) => {

  useEffect(() => {
    setTimeout(() => navigation.replace(EStackScreens.BOTTOM_NAVIGATOR), 2000);
  }, []);

  return (
    <BaseLayout>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LogoIcon />
      </View>
    </BaseLayout>
  )
}

export default Splash;