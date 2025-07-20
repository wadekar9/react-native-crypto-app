import React, { useCallback, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {
    AllCoinsPage,
    TopGainersCoinsPage,
    TopLoosersCoinsPage,
    FavouritesCoinsPage,
} from '$components/pages';
import { DEVICE_WIDTH } from '$constants/styles.constants';

interface MarketPageContentProps {
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

const MarketPageContent: React.FC<MarketPageContentProps> = ({ currentIndex, setCurrentIndex }) => {

    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        scrollViewRef.current?.scrollTo({
            x: currentIndex * DEVICE_WIDTH,
            animated: true,
        });
    }, [currentIndex]);

    const handleScrollEnd = useCallback(
        (event: any) => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const newIndex = Math.round(offsetX / DEVICE_WIDTH);
            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
            }
        },
        [currentIndex, setCurrentIndex]
    );

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal={true}
                contentContainerStyle={{ flexGrow: 1 }}
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={false}
                pagingEnabled={true}
                snapToAlignment={'center'}
                snapToInterval={DEVICE_WIDTH}
                accessibilityRole={'list'}
                decelerationRate={'fast'}
                centerContent={true}
                pinchGestureEnabled={false}
                scrollEventThrottle={16}
                onMomentumScrollEnd={handleScrollEnd}
            >
                <AllCoinsPage />
                <TopGainersCoinsPage />
                <TopLoosersCoinsPage />
                <FavouritesCoinsPage />
            </ScrollView>
        </View>
    );
};

export default React.memo(MarketPageContent)

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        width: DEVICE_WIDTH
    }
});