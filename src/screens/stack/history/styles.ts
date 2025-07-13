import { EColors, EFonts, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerName: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(16),
        color: EColors.PRIMARY_BLACK_COLOR
    },
    headerContainer: {
        flex: 0.08,
        flexDirection: 'row',
        alignItems: 'stretch',
        zIndex: 2000,
        elevation: 2,
        shadowColor: EColors.PRIMARY_BLACK_COLOR,
        backgroundColor: EColors.BACKGROUND_COLOR
    }
})