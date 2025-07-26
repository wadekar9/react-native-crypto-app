import React, { useEffect, useRef } from 'react';
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface FadeContainerProps {
    containerStyle?: StyleProp<ViewStyle>
}

const FadeContainer: React.FC<FadeContainerProps> = (props) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Create looping animation
        const fadeInOut = Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 1, // Fade in to full opacity
                    duration: 1500, // 1.5 seconds
                    useNativeDriver: true, // Use native driver for better performance
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0, // Fade out to transparent
                    duration: 1500, // 1.5 seconds
                    useNativeDriver: true,
                }),
            ])
        );

        // Start the animation
        fadeInOut.start();

        // Cleanup on unmount
        return () => fadeInOut.stop();
    }, [fadeAnim]);

    return (
        <Animated.View style={[styles.container, props.containerStyle, { opacity: fadeAnim }]} />
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        backgroundColor: '#f0f0f0',
        borderColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FadeContainer;