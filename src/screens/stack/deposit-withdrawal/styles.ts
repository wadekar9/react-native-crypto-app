import { EColors, EFonts, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerName: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(16),
        color: EColors.PRIMARY_BLACK_COLOR,
    },
    headerContainer: {
        flex: 0.08,
        flexDirection: 'row',
        alignItems: 'stretch',
        zIndex: 2000,
        elevation: 2,
        shadowColor: EColors.PRIMARY_BLACK_COLOR,
        backgroundColor: EColors.BACKGROUND_COLOR,
    },
    keyboardBtnContainer: {
        backgroundColor: EColors.TRANSPARENT,
        width: '33.3%',
        height: moderateScale(55),
    },
    btnLabelStyle: {
        fontFamily: EFonts.BOLD,
        fontSize: moderateScale(28),
        color: EColors.PRIMARY_BLACK_COLOR,
    },
    labelStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(12),
        color: EColors.GREY,
    },
    amountStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(48),
        color: EColors.PRIMARY_BLACK_COLOR,
    },
    currentBalanceLabelStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(14),
        color: EColors.DARK_GREY,
    },
    percentageItemStyle: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(5),
        borderRadius: moderateScale(20),
        borderColor: EColors.GREY,
        borderWidth: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    percentageItemLabelStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(12),
        color: EColors.GREY,
        textAlign: 'center',
    },
});
