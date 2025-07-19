import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LeftChevron } from '$assets/icons';
import { EColors, EFonts, EFontSize } from '$constants/styles.constants';
import { navigationRef } from '$types/navigation';

interface BackHeaderProps {
    headerName: string;
}

const BackHeader: React.FC<BackHeaderProps> = ({ headerName }) => {

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigationRef.current?.goBack()}
                accessibilityLabel="Go back"
            >
                <LeftChevron height={18} width={18} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{headerName}</Text>
            <View style={styles.placeholder} />
        </View>
    );
};

export default BackHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    backButton: {
        padding: 8
    },
    headerText: {
        fontSize: EFontSize['2XL'],
        fontFamily: EFonts.SEMI_BOLD,
        color: EColors.BLACK,
        textAlign: 'center',
        flex: 1,
    },
    placeholder: {
        width: 18
    },
});