import { DEVICE_WIDTH, EColors, EFonts, EFontSize, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(20),
        gap: moderateScale(20)
    },
    section: {
        width: '100%',
        gap: moderateScale(10),
        overflow: 'hidden',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    option: {
        width: '100%',
        padding: moderateScale(15),
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(10),
        borderWidth: moderateScale(1.5),
        borderColor: EColors.BORDER_COLOR,
        borderRadius: moderateScale(10),
        backgroundColor: EColors.LIGHT_SKY
    },
    icon: {
        height: moderateScale(40),
        width: moderateScale(40),
        overflow: 'hidden'
    },
    label: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: EFontSize.LG,
        color: EColors.BLACK,
        textAlign: 'center'
    }
})