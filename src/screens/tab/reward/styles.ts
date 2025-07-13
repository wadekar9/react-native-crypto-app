import { EColors, EFonts, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: EColors.WHITE,
        borderRadius: moderateScale(12),
        overflow: 'hidden',
        marginVertical: moderateScale(5),
        elevation: 2,
        shadowColor: EColors.BLACK,
        paddingVertical: moderateScale(8)
    },
    headerLabelStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(20),
        color: EColors.PRIMARY_BLACK_COLOR
    },
    keyValuePairContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(18)
    },
    keyValuePairContainerValue: {
        fontFamily: EFonts.MEDIUM,
        color: EColors.DARK_GREY,
        fontSize: moderateScale(14)
    },
    keyValuePairContainerKey: {
        fontFamily: EFonts.MEDIUM,
        color: EColors.GREY,
        fontSize: moderateScale(12)
    }
});
