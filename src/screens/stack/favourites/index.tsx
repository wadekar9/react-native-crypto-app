import { View, Text } from 'react-native'
import React from 'react'
import { EStackScreens } from '$constants/screens.constants'
import { RootStackScreenProps } from '$types/navigation'

const Favourites: React.FC<RootStackScreenProps<EStackScreens.FAVOURITES>> = () => {
    return (
        <View>
            <Text>Favourites</Text>
        </View>
    )
}

export default Favourites