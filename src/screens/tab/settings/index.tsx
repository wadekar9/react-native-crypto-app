import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { BottomTabsScreenProps, navigationRef } from '$types/navigation'
import { EBottomTabScreens, EStackScreens } from '$constants/screens.constants'
import { BaseLayout } from '$components/common'
import { styles } from './styles'
import { IMAGES } from '$assets/images'

const More: React.FC<BottomTabsScreenProps<EBottomTabScreens.SETTINGS>> = () => {
    return (
        <BaseLayout>
            <View style={styles.container}>
                <Pressable style={styles.option} onPress={() => navigationRef.current?.navigate(EStackScreens.CURRENCY_CONVERTER)}>
                    <View style={styles.icon}>
                        <Image source={IMAGES.CALCULATOR_ICON} style={{ width: '100%', height: '100%' }} resizeMode={'contain'} />
                    </View>
                    <Text style={styles.label}>Currency Converter Calculator</Text>
                </Pressable>
                <Pressable style={styles.option} onPress={() => navigationRef.current?.navigate(EStackScreens.EXCHANGES)}>
                    <View style={styles.icon}>
                        <Image source={IMAGES.MONEY_EXCHANGE} style={{ width: '100%', height: '100%' }} resizeMode={'contain'} />
                    </View>
                    <Text style={styles.label}>Exchanges</Text>
                </Pressable>
            </View>
        </BaseLayout>
    )
}

export default More