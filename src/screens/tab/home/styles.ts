import { EColors, EFonts, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    labelStyle: {
        fontFamily: EFonts.BOLD,
        fontSize: moderateScale(20),
        color: EColors.PRIMARY_BLACK_COLOR,
        textAlign: 'left',
        flexGrow: 1
    },
    contentContainer: {
        flexGrow: 1,
        padding: moderateScale(20),
        gap: moderateScale(20)
    },
    container: {
        gap: moderateScale(10)
    },
    content: {
        gap: moderateScale(8)
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: moderateScale(10)
    }
})