import { EColors, EFonts, EFontSize, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        padding: moderateScale(20),
        gap: moderateScale(12)
    },
    contentContainer: {
        flexGrow: 1
    },
    wrapper: {
        flex: 1,
        flexGrow: 1
    },
    coinItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(10),
        padding: moderateScale(10),
        borderBottomWidth: 1,
        borderBottomColor: EColors.BORDER_COLOR
    },
    icon: {
        width: moderateScale(40),
        height: moderateScale(40),
        aspectRatio: 1,
    },
    coinInfo: {
        flex: 1,
    },
    coinName: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: EFontSize.XL,
        color: EColors.BLACK
    },
    coinSymbol: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.BASE,
        color: EColors.GREY
    },
    emptyText: {
        textAlign: 'center',
        padding: 20,
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize["2XL"],
        color: EColors.DARK_GREY
    },
})