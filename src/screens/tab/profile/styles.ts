import { Colors, Fonts, moderateScale } from "$utils/theme";
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
        fontFamily: Fonts.CIRCULAR_STD_BOOK,
        fontSize: moderateScale(18),
        color: Colors.DARK_GREY,
    },
});
