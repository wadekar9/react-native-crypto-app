import { EColors, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: EColors.WHITE,
    },
    searchContainer: {
        padding: moderateScale(15)
    },
    contentContainer: {
        flexGrow: 1,
        padding: moderateScale(15),
        gap: moderateScale(12)
    }
});