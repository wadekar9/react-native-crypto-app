import { EColors, EFonts, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        height: moderateScale(60),
        overflow: 'hidden',
        borderColor: '#DFE2E4',
        borderBottomWidth: 1.5,
    },
    tabLabelStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(18),
        color: EColors.DARK_GREY,
    },
});
