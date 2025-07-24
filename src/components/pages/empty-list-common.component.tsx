import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants'
import { EmptyData } from '$assets/icons'

const EmptyListCommonPage = () => {
    return (
        <View style={styles.container}>
            <EmptyData width={moderateScale(150)} height={moderateScale(150)} />
            <Text style={styles.label}>No data found</Text>
        </View>
    )
}

export default EmptyListCommonPage

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: moderateScale(20)
    },
    label: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: EFontSize.LG,
        color: EColors.GREY,
        textAlign: 'center'
    }
})