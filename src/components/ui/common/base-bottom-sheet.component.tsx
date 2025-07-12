import { StyleSheet, View } from 'react-native'
import React, { memo, useImperativeHandle, useRef } from 'react'
import ActionSheet, { ActionSheetRef, ActionSheetProps } from 'react-native-actions-sheet'
import { moderateScale } from '@utils/theme';

interface BaseBottomSheetRef {
    open: () => void;
    close: () => void;
};

interface BaseBottomSheetProps {
    sheetHeight?: number;
    sheetProps?: ActionSheetProps;
    children?: React.ReactNode;
};

const BaseBottomSheet = React.forwardRef<BaseBottomSheetRef, BaseBottomSheetProps>((props, ref) => {

    // const { colors, insets } = useAppTheme();
    const actionSheetRef = useRef<ActionSheetRef>(null);

    const status = useRef<'open' | 'close'>('close');

    useImperativeHandle(ref, () => ({
        open: () => actionSheetRef.current?.show(),
        close: () => actionSheetRef.current?.hide()
    }))

    return (
        <>
            <ActionSheet
                ref={actionSheetRef}
                safeAreaInsets={insets}
                containerStyle={{ ...styles.container, backgroundColor: colors.background1 }}
                indicatorStyle={styles.indicator}
                gestureEnabled
                overdrawEnabled={false}
                closeOnPressBack={true}
                closeOnTouchBackdrop={true}
                onOpen={() => {
                    status.current = 'open';
                    if (props.sheetProps?.onOpen) props.sheetProps?.onOpen();
                }}
                onClose={() => {
                    status.current = 'close';
                    if (props.sheetProps?.onClose) props.sheetProps?.onClose();
                }}
                overlayColor={colors.shadow}
                {...props.sheetProps}
            >
                <View style={{ height: props.sheetHeight || moderateScale(354) }}>
                    <View style={styles.wrapper}>
                        {props.children}
                    </View>
                </View>
            </ActionSheet>
        </>
    )
})

export default memo(BaseBottomSheet);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexGrow: 1
    },
    container: {
        borderTopRightRadius: moderateScale(30),
        borderTopLeftRadius: moderateScale(30)
    },
    indicator: {
        width: moderateScale(78),
        height: moderateScale(4),
        borderRadius: moderateScale(100),
        marginTop: moderateScale(8),
        alignSelf: 'center',
        backgroundColor: Colors.light.background
    }
})