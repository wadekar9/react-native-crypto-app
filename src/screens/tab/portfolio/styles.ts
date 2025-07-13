import { Colors, Fonts, moderateScale } from "$utils/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    labelStyle: {
        fontFamily: Fonts.CIRCULAR_STD_BOLD,
        fontSize: moderateScale(20),
        color: Colors.PRIMARY_BLACK_COLOR,
        textAlign: 'left',
        textTransform: 'capitalize',
        margin: moderateScale(10),
    },
    buttonContainerText: {
        fontFamily: Fonts.GOTHAM_MEDIUM,
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
        borderColor: Colors.PRIMARY_COLOR
    }
});
