import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants'
import { useDebounce } from '$hooks/common';
import { SearchIcon } from '$assets/icons';

interface BaseSearchbarRef {
    clear: () => void;
    blur: () => void;
    focus: () => void;
}

interface BaseSearchbarProps {
    value?: string;
    onChange?: (e: string) => void;
    disabled?: boolean;
    placeholder?: string;
}

const BaseSearchbar = React.forwardRef<BaseSearchbarRef, BaseSearchbarProps>((props, ref) => {

    const inputRef = React.useRef<TextInput>(null);

    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    const [search, setSearch] = React.useState(props.value || '');
    const debouncedSearch = useDebounce(search);

    React.useImperativeHandle(ref, () => ({
        clear: () => inputRef.current?.clear(),
        blur: () => inputRef.current?.blur(),
        focus: () => inputRef.current?.focus()
    }), [])

    React.useEffect(() => {
        props.onChange && props.onChange(debouncedSearch)
    }, [debouncedSearch])

    return (
        <View pointerEvents={props.disabled ? 'none' : 'auto'} style={[styles.container, isFocused && { borderColor: EColors.PRIMARY_COLOR }]}>
            <View style={styles.icon}>
                <SearchIcon width={moderateScale(24)} height={moderateScale(24)} />
            </View>
            <View style={{ flex: 1, height: '100%' }}>
                <TextInput
                    ref={inputRef}
                    value={search}
                    onChangeText={setSearch}
                    placeholder={props.placeholder || 'Search'}
                    placeholderTextColor={EColors.GREY}
                    style={styles.input}
                    returnKeyType={'go'}
                    returnKeyLabel={'Go'}
                    numberOfLines={1}
                    editable={!props.disabled}
                    keyboardAppearance={'default'}
                    multiline={false}
                    autoCorrect
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </View>
        </View>
    )
})

export default React.memo(BaseSearchbar)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: moderateScale(50),
        borderRadius: moderateScale(6),
        backgroundColor: EColors.BACKGROUND_COLOR,
        paddingHorizontal: moderateScale(12),
        gap: moderateScale(10),
        borderWidth: moderateScale(1),
        borderColor: EColors.BORDER_COLOR,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XL,
        color: EColors.BLACK,
        height: '100%'
    }
})