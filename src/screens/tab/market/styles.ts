import { Colors, Fonts, moderateScale } from "$utils/theme";
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
        borderColor: Colors.BORDER_COLOR,
        borderRadius: moderateScale(30),
    },
    selectedMarketStyle: {
        fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
        fontSize: moderateScale(12),
        color: Colors.GREY,
        marginRight: moderateScale(8),
    },
    labelStyle: {
        fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
        fontSize: moderateScale(18),
        color: Colors.BLACK,
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        height: moderateScale(38),
        paddingHorizontal: moderateScale(5),
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.DARK_GREY,
    },
    tabText: {
        fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
        fontSize: moderateScale(14),
        color: Colors.GREY,
        marginHorizontal: moderateScale(10),
    },
    tabLineContainer: {
        backgroundColor: Colors.PRIMARY_COLOR,
        height: StyleSheet.hairlineWidth + 1.8,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});
