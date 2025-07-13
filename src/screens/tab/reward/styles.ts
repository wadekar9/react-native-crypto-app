import { Colors, Fonts, moderateScale } from "$utils/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        borderRadius: moderateScale(12),
        overflow: 'hidden',
        marginVertical: moderateScale(5),
        elevation: 2,
        shadowColor: Colors.BLACK,
        paddingVertical: moderateScale(8)
    },
    headerLabelStyle: {
        fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
        fontSize: moderateScale(20),
        color: Colors.PRIMARY_BLACK_COLOR
    },
    keyValuePairContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(18)
    },
    keyValuePairContainerValue: {
        fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
        color: Colors.DARK_GREY,
        fontSize: moderateScale(14)
    },
    keyValuePairContainerKey: {
        fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
        color: Colors.GREY,
        fontSize: moderateScale(12)
    }
});
