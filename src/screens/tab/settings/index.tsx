import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabsScreenProps } from '$types/navigation'
import { EBottomTabScreens } from '$constants/screens.contants'

const Settings: React.FC<BottomTabsScreenProps<EBottomTabScreens.SETTINGS>> = () => {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    )
}

export default Settings