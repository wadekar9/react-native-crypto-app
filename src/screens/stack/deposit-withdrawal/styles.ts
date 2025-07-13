import { Colors, Fonts, moderateScale } from "$utils/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerName: {
        fontFamily: Fonts.CIRCULAR_STD_BOOK,
        fontSize: moderateScale(16),
        color: Colors.PRIMARY_BLACK_COLOR,
    },
    headerContainer: {
        flex: 0.08,
        flexDirection: 'row',
        alignItems: 'stretch',
        zIndex: 2000,
        elevation: 2,
        shadowColor: Colors.PRIMARY_BLACK_COLOR,
        backgroundColor: Colors.BACKGROUND_COLOR,
    },
    keyboardBtnContainer: {
        backgroundColor: Colors.TRANSPARENT,
        width: '33.3%',
        height: moderateScale(55),
    },
    btnLabelStyle: {
        fontFamily: Fonts.CIRCULAR_STD_BOLD,
        fontSize: moderateScale(28),
        color: Colors.PRIMARY_BLACK_COLOR,
    },
    labelStyle: {
        fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
        fontSize: moderateScale(12),
        color: Colors.GREY,
    },
    amountStyle: {
        fontFamily: Fonts.CIRCULAR_STD_BOOK,
        fontSize: moderateScale(48),
        color: Colors.PRIMARY_BLACK_COLOR,
    },
    currentBalanceLabelStyle: {
        fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
        fontSize: moderateScale(14),
        color: Colors.DARK_GREY,
    },
    percentageItemStyle: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(5),
        borderRadius: moderateScale(20),
        borderColor: Colors.GREY,
        borderWidth: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    percentageItemLabelStyle: {
        fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
        fontSize: moderateScale(12),
        color: Colors.GREY,
        textAlign: 'center',
    },
});
