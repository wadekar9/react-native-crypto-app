import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IconButton } from '$components/common';
import { DEVICE_WIDTH, EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';

interface MarketPageTabNavigatorProps {
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
    scrollViewRef: React.RefObject<ScrollView>;
}

const tabs = ['All', 'High Volume', 'Low Volume', 'Favourites'];

const MarketPageTabNavigator: React.FC<MarketPageTabNavigatorProps> = ({ currentIndex, setCurrentIndex, scrollViewRef }) => {

    const translateX = useRef(new Animated.Value(10)).current;
    const tabWidths = useRef<number[]>(Array(tabs.length).fill(0)).current;
    const tabPositions = useRef<number[]>(Array(tabs.length).fill(0)).current;

    const handleTabLayout = useCallback(
        (index: number, event: any) => {
            const { width, x } = event.nativeEvent.layout;
            tabWidths[index] = width;
            tabPositions[index] = x;
        },
        []
    );

    const animateIndicator = useCallback(
        (index: number) => {
            Animated.spring(translateX, {
                toValue: tabPositions[index],
                useNativeDriver: true,
                speed: 12,
                bounciness: 0,
            }).start();
        },
        [translateX]
    );

    const handleTabPress = useCallback(
        (index: number) => {
            setCurrentIndex(index);
            animateIndicator(index);
            scrollViewRef.current?.scrollTo({
                x: index * DEVICE_WIDTH,
                animated: true,
            });
        },
        [animateIndicator, setCurrentIndex, scrollViewRef]
    );

    useEffect(() => {
        animateIndicator(currentIndex)
    }, [currentIndex])

    return (
        <View style={styles.tabs}>
            {tabs.map((tab, idx) => (
                <IconButton
                    onPress={() => handleTabPress(idx)}
                    onLayout={(e) => handleTabLayout(idx, e)}
                    key={`${idx}`}
                    style={styles.tab}
                >
                    <Text numberOfLines={1} style={[styles.tabText, currentIndex === idx && { color: EColors.PRIMARY_COLOR }]}>{tab}</Text>
                </IconButton>
            ))}
            <Animated.View
                style={[
                    styles.tabIndicator,
                    {
                        transform: [{ translateX }],
                        width: tabWidths[currentIndex] || moderateScale(38)
                    },
                ]}
            />
        </View>
    );
};

export default React.memo(MarketPageTabNavigator);

export const styles = StyleSheet.create({
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
    }
});