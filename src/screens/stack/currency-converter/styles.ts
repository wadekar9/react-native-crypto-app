import { EColors, EFonts, EFontSize, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: EColors.WHITE,
    },
    contentContainer: {
        flexGrow: 1,
        padding: moderateScale(20),
        gap: moderateScale(20),
    },
    resultSection: {
        backgroundColor: '#F8FAFC',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 2,
        alignSelf: 'center',
        borderColor: EColors.BORDER_COLOR,
    },
    resultText: {
        fontFamily: EFonts.BOLD,
        fontSize: 26,
        color: EColors.DARK_GREY, // Green-Teal shade
        textAlign: 'center',
        marginBottom: 8,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(15),
        marginTop: moderateScale(10),
    },
    action: {
        flex: 1,
    },
    errorContainer: {
        marginTop: moderateScale(10),
        backgroundColor: '#FFE5E5',
        padding: moderateScale(10),
        borderRadius: 8,
        borderColor: '#FF8A8A',
        borderWidth: 1,
    },
    errorText: {
        color: '#B00020',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: EFonts.MEDIUM,
    },
    loader: {
        marginVertical: moderateScale(12),
        alignItems: 'center',
    },
    prefix: {
        fontSize: EFontSize.LG,
        fontFamily: EFonts.MEDIUM,
        color: EColors.DARK_GREY
    }
});
