import { DEVICE_WIDTH, EColors, EFonts, EFontSize, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerWrapper: {
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
        gap: moderateScale(15)
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: moderateScale(50),
        height: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: moderateScale(22),
        color: EColors.PRIMARY_BLACK_COLOR,
    },
    headerSpan: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.SM,
        color: EColors.GREY
    },
    metrics: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: moderateScale(5),
        width: '100%'
    },
    metric: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(5),
        backgroundColor: EColors.BACKGROUND_COLOR,
        borderRadius: moderateScale(100),
        borderWidth: 1,
        borderColor: EColors.BORDER_COLOR
    },
    metricText: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.LG,
        color: EColors.GREY
    },
    metricValue: {
        fontFamily: EFonts.SEMI_BOLD,
        color: EColors.PRIMARY_COLOR,
        textTransform: 'uppercase'
    },
    tabs: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(10),
        borderBottomWidth: 1,
        borderColor: EColors.BORDER_COLOR
    },
    tab: {
        padding: moderateScale(10),
        paddingBottom: moderateScale(5)
    },
    tabText: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: EFontSize.BASE,
        color: EColors.GREY
    },
    tabIndicator: {
        position: 'absolute',
        minWidth: moderateScale(38),
        maxWidth: moderateScale(95),
        height: moderateScale(3),
        borderRadius: 100,
        backgroundColor: EColors.PRIMARY_COLOR,
        bottom: 0
    },
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: 'red',
        width: DEVICE_WIDTH
    }
});