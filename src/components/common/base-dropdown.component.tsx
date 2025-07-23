import { StyleSheet, View, Text, Image } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { Dropdown } from 'react-native-element-dropdown';
import { ChevronDown, ChevronUp } from '$assets/icons';
import { IMAGES } from '$assets/images';

interface BaseDropdownProps {
    data?: any[];
    variant?: 'primary' | 'secondary';
    label?: string;
    value?: string;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    onValueChange?: (e: string) => void;
    icon?: string;
}

const BaseDropdown: React.FC<BaseDropdownProps> = (props) => {

    const { data = [], label, value, placeholder = 'Select Item', error, disabled, variant, onValueChange, icon } = props;

    const [isFocus, setIsFocus] = useState<boolean>(false);

    const LeftIcon = useCallback(() => {
        return (
            <View style={styles.icon}>
                <View style={{ width: moderateScale(20), height: moderateScale(20), overflow: 'hidden' }}>
                    <Image
                        source={icon ? { uri: icon } : IMAGES.CRYPTOHAND_ICON}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode={'contain'}
                    />
                </View>
            </View>
        )
    }, [icon])

    return (
        <View style={styles.wrapper}>
            {label && <Text numberOfLines={2} style={styles.label}>{label}</Text>}
            <View style={[styles.containerWrapper]}>
                <Dropdown
                    style={[styles.container, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={[styles.value, styles.placeholder]}
                    selectedTextStyle={styles.value}
                    itemTextStyle={styles.itemTextStyle}
                    containerStyle={{ backgroundColor: EColors.BACKGROUND_COLOR }}
                    data={data}
                    maxHeight={moderateScale(200)}
                    labelField="name"
                    valueField="code"
                    dropdownPosition='auto'
                    disable={disabled}
                    activeColor={EColors.BORDER_COLOR}
                    placeholder={placeholder}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        onValueChange && onValueChange(item.code);
                        setIsFocus(false);
                    }}
                    renderLeftIcon={() => <LeftIcon />}
                    renderRightIcon={(visible) => (
                        <View style={styles.icon}>
                            {visible ?
                                <ChevronUp fill={EColors.GREY} width={moderateScale(20)} height={moderateScale(20)} />
                                :
                                <ChevronDown fill={EColors.GREY} width={moderateScale(20)} height={moderateScale(20)} />
                            }
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default React.memo(BaseDropdown);

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
    value: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.LG,
        color: EColors.PRIMARY_BLACK_COLOR
    },
    placeholder: {
        color: EColors.GREY
    },
    containerWrapper: {
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(4),
        borderColor: EColors.BORDER_COLOR,
        overflow: 'hidden',
        elevation: 0
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: moderateScale(50)
    },
    icon: {
        paddingHorizontal: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        alignSelf: 'stretch'
    },
    itemTextStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.LG,
        color: EColors.DARK_GREY
    }
})