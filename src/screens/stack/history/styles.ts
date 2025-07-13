import { Colors, Fonts, moderateScale } from "$utils/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerName: {
        fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
        fontSize: moderateScale(16),
        color: Colors.PRIMARY_BLACK_COLOR
    },
    headerContainer: {
        flex: 0.08,
        flexDirection: 'row',
        alignItems: 'stretch',
        zIndex: 2000,
        elevation: 2,
        shadowColor: Colors.PRIMARY_BLACK_COLOR,
        backgroundColor: Colors.BACKGROUND_COLOR
    }
})