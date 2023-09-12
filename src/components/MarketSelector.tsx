import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useRef, useEffect, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { moderateScale, Fonts, Colors, DEVICE_STYLES, DEVICE_STYLES_WITH_STATUSBAR } from '@utils/theme';
import { MarketSelectorProps, MarketListItemProps } from '@types';
import { marketsList } from '@mock/index';
import RadioButton from './RadioButton';
import BaseButton from './BaseButton';

const MarketSelector: React.FC<MarketSelectorProps> = ({status = false, changeStatus} : MarketSelectorProps) => {

    const sheetRef = useRef<RBSheet>(null);
    const [selectedMarket, setSelectedMarket] = useState<number>(1);

    useEffect(() => {
        (status) ? sheetRef.current?.open() : sheetRef.current?.close();
    },[status])

    return (
        <RBSheet
            ref={sheetRef}
            closeOnDragDown={true}
            closeOnPressBack={true}
            closeOnPressMask={true}
            dragFromTopOnly={true}
            openDuration={600}
            closeDuration={300}
            keyboardAvoidingViewEnabled={true}
            animationType={'slide'}
            height={moderateScale(DEVICE_STYLES.SCREEN_HEIGHT * 0.45)}
            customStyles={{
                wrapper: { backgroundColor: "rgba(0,0,0,0.4)" },
                draggableIcon: styles.sheetIcon,
                container: styles.sheetContainer
            }}
            onClose={() => changeStatus(false)}
        >
            <View style={styles.container}>
                <Text style={styles.headerLabelStyle}>Markets</Text>
                <View>
                    {
                        marketsList?.map((element, index) => {
                            return(
                                <TouchableOpacity
                                    accessibilityRole={'tab'}
                                    accessible={true}
                                    activeOpacity={0.7}
                                    key={`${index}`}
                                    onPress={() => setSelectedMarket(element.id)}
                                    style={styles.listContainer}
                                >
                                    <Text style={[styles.labelStyle, { color : (selectedMarket === element.id) ? Colors.PRIMARY_COLOR : Colors.DARK_GREY }]}>{element.label}</Text>
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
        </RBSheet>
    )
}

export default memo(MarketSelector);

const styles = StyleSheet.create({
    sheetContainer: {
        backgroundColor: '#fff',
        borderTopRightRadius : moderateScale(12),
        borderTopLeftRadius : moderateScale(12)
    },
    sheetIcon: {
        backgroundColor: Colors.PRIMARY_COLOR,
        width: '25%',
        height: moderateScale(5),
        borderRadius: moderateScale(20),
    },
    container : {
        backgroundColor : Colors.WHITE,
        padding : moderateScale(15),
        justifyContent : 'space-between',
        flex : 1
    },
    headerLabelStyle : {
        fontFamily : Fonts.CIRCULAR_STD_MEDIUM,
        fontSize : moderateScale(18),
        color : Colors.BLACK
    },
    listContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        height : moderateScale(50),
        borderBottomWidth : 1.2,
        borderBottomColor : Colors.BORDER_COLOR
    },
    labelStyle : {
        fontFamily : Fonts.CIRCULAR_STD_MEDIUM,
        fontSize : moderateScale(14)
    }
});