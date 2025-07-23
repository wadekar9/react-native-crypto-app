import React from 'react';
import { View, TextInput, TextInputProps, StyleSheet, ViewStyle, StyleProp, Text } from 'react-native';
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';

interface BaseTextInputRef {
    clear: () => void;
    blur: () => void;
    focus: () => void;
}

interface BaseTextInputProps extends Omit<TextInputProps, 'style' | 'editable' | 'multiline'> {
    label?: string;
    error?: string;
    disabled?: boolean;
    RightAccessory?: React.ReactNode;
    LeftAccessory?: React.ReactNode;
}

const BaseTextInput = React.forwardRef<BaseTextInputRef, BaseTextInputProps>(({
    label,
    secureTextEntry,
    error,
    disabled = false,
    RightAccessory,
    LeftAccessory,
    ...props
}, ref) => {

    const inputRef = React.useRef<TextInput>(null);

    const [isFocused, setIsFocused] = React.useState<boolean>(false);

    React.useImperativeHandle(ref, () => ({
        clear: () => inputRef.current?.clear(),
        blur: () => inputRef.current?.blur(),
        focus: () => inputRef.current?.focus()
    }), [])

    const handleFocus = React.useCallback((e: any) => {
        setIsFocused(true);
        if (props.onFocus) props.onFocus(e);
    }, [props]);

    const handleBlur = React.useCallback((e: any) => {
        setIsFocused(false);
        if (props.onBlur) props.onBlur(e);
    }, [props]);

    const handleSubmitEditing = React.useCallback((e: any) => {
        if (!props.onSubmitEditing) {
            inputRef.current?.blur();
            return;
        }
        props.onSubmitEditing(e);
    }, [props]);

    const $EXTRA_STYLES = React.useMemo((): StyleProp<ViewStyle> => {
        if (!!!LeftAccessory && secureTextEntry) {
            return { paddingLeft: moderateScale(12) }
        } else if (!!!LeftAccessory && !!!RightAccessory) {
            return { paddingHorizontal: moderateScale(12) }
        } else if (!LeftAccessory) {
            return { paddingLeft: moderateScale(12) }
        } else if (!RightAccessory || !secureTextEntry) {
            return { paddingRight: moderateScale(12) }
        }
    }, [LeftAccessory, RightAccessory, secureTextEntry])

    return (
        <View style={styles.wrapper}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={[styles.containerWrapper, { opacity: disabled ? 0.6 : 1 }, isFocused && { borderColor: EColors.PRIMARY_COLOR }]}>
                <View style={[styles.container, $EXTRA_STYLES]}>
                    {!!LeftAccessory && (<View style={styles.icon}>{LeftAccessory}</View>)}
                    <TextInput
                        {...props}
                        ref={inputRef}
                        numberOfLines={1}
                        multiline={false}
                        style={styles.textInput}
                        placeholder={props.placeholder || "Type Something here..."}
                        placeholderTextColor={EColors.GREY}
                        cursorColor={EColors.PRIMARY_COLOR}
                        editable={!disabled}
                        returnKeyType={props.returnKeyType || 'done'}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onSubmitEditing={handleSubmitEditing}
                    />
                    {!!RightAccessory && (<View style={styles.icon}>{RightAccessory}</View>)}
                </View>
            </View>
        </View>
    );
});

export default React.memo(BaseTextInput);

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
    },
    label: {
        fontFamily: EFonts.SEMI_BOLD,
        color: EColors.PRIMARY_BLACK_COLOR,
        textAlign: 'left',
        marginBottom: moderateScale(4)
    },
    containerWrapper: {
        borderWidth: moderateScale(1.5),
        borderRadius: moderateScale(4),
        borderColor: EColors.BORDER_COLOR,
        overflow: 'hidden',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        height: moderateScale(50)
    },
    textInput: {
        flex: 1,
        height: '100%',
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.LG,
        color: EColors.PRIMARY_BLACK_COLOR
    },
    icon: {
        height: moderateScale(50),
        paddingHorizontal: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    }
});