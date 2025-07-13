import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useRef, useEffect, useState } from 'react';
import { moderateScale, EFonts, EColors } from '$constants/styles.constants';
import { MarketSelectorProps, MarketListItemProps } from '$types/common';
import { marketsList } from '$mock/index';
import RadioButton from './RadioButton';
import BaseButton from './BaseButton';
import { BaseBottomSheet } from './ui';

const MarketSelector: React.FC<MarketSelectorProps> = ({ status = false, changeStatus }: MarketSelectorProps) => {

    const sheetRef = useRef<any>(null);
    const [selectedMarket, setSelectedMarket] = useState<number>(1);

    useEffect(() => {
        (status) ? sheetRef.current?.open() : sheetRef.current?.close();
    }, [status])

    return (
        <BaseBottomSheet
            ref={sheetRef}
        >
            <View style={styles.container}>
                <Text style={styles.headerLabelStyle}>Markets</Text>
                <View>
                    {
                        marketsList?.map((element, index) => {
                            return (
                                <TouchableOpacity
                                    accessibilityRole={'tab'}
                                    accessible={true}
                                    activeOpacity={0.7}
                                    key={`${index}`}
                                    onPress={() => setSelectedMarket(element.id)}
                                    style={styles.listContainer}
                                >
                                    <Text style={[styles.labelStyle, { color: (selectedMarket === element.id) ? EColors.PRIMARY_COLOR : EColors.DARK_GREY }]}>{element.label}</Text>
                                    <RadioButton key={'custom-radio-btn'} onPress={() => console.log('kkkkk')} selected={selectedMarket === element.id} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <BaseButton
                    label='Update Market'
                    onPress={() => changeStatus(false)}
                />
            </View>
        </BaseBottomSheet>
    )
}

export default memo(MarketSelector);

const styles = StyleSheet.create({
    sheetContainer: {
        backgroundColor: '#fff',
        borderTopRightRadius: moderateScale(12),
        borderTopLeftRadius: moderateScale(12)
    },
    sheetIcon: {
        backgroundColor: EColors.PRIMARY_COLOR,
        width: '25%',
        height: moderateScale(5),
        borderRadius: moderateScale(20),
    },
    container: {
        backgroundColor: EColors.WHITE,
        padding: moderateScale(15),
        justifyContent: 'space-between',
        flex: 1
    },
    headerLabelStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(18),
        color: EColors.BLACK
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: moderateScale(50),
        borderBottomWidth: 1.2,
        borderBottomColor: EColors.BORDER_COLOR
    },
    labelStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: moderateScale(14)
    }
});