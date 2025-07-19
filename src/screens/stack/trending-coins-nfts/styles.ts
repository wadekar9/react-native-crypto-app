import { moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flexGrow: 1,
        padding: moderateScale(20),
        gap: moderateScale(5)
    }
})