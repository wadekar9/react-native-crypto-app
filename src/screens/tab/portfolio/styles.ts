import { EColors, EFonts, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    labelStyle: {
        fontFamily: EFonts.BOLD,
        fontSize: moderateScale(20),
        color: EColors.PRIMARY_BLACK_COLOR,
        textAlign: 'left',
        textTransform: 'capitalize',
        margin: moderateScale(10),
    },
    buttonContainerText: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(15)
    },
    buttonContainer: {
        flex: 0.47,
        height: moderateScale(50),
        overflow: 'hidden',
        borderRadius: moderateScale(4),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: moderateScale(10),
        borderWidth: moderateScale(1.5),
        borderColor: EColors.PRIMARY_COLOR
    }
});
