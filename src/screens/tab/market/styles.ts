import { EColors, EFonts, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    middleContainer: {
        flex: 1,
        paddingHorizontal: moderateScale(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dropContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(5),
        borderWidth: 1,
        borderColor: EColors.BORDER_COLOR,
        borderRadius: moderateScale(30),
    },
    selectedMarketStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(12),
        color: EColors.GREY,
        marginRight: moderateScale(8),
    },
    labelStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(18),
        color: EColors.BLACK,
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        height: moderateScale(38),
        paddingHorizontal: moderateScale(5),
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: EColors.DARK_GREY,
    },
    tabText: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(14),
        color: EColors.GREY,
        marginHorizontal: moderateScale(10),
    },
    tabLineContainer: {
        backgroundColor: EColors.PRIMARY_COLOR,
        height: StyleSheet.hairlineWidth + 1.8,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});
