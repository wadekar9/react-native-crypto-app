import { View, Text } from 'react-native'
import React from 'react'
import { EStackScreens } from '$constants/screens.contants'
import { RootStackScreenProps } from '$types/navigation'

const CoinDetails: React.FC<RootStackScreenProps<EStackScreens.COIN_DETAILS>> = () => {
    return (
        <View>
            <Text>CoinDetails</Text>
        </View>
    )
}

export default CoinDetails