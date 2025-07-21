import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants'
import { IMAGES } from '$assets/images'

const EmptyListCoinsPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image
                    source={IMAGES.CRYPTO_CURRENCY}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode={'contain'}
                />
            </View>
            <Text style={styles.label}>No coins found</Text>
        </View>
    )
}

export default EmptyListCoinsPage

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: moderateScale(20)
    },
    image: {
        width: moderateScale(80),
        height: undefined,
        aspectRatio: 1,
        overflow: 'hidden'
    },
    label: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: EFontSize.LG,
        color: EColors.GREY,
        textAlign: 'center'
    }
})