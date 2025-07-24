import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { EColors } from '$constants/styles.constants'

const ListPaginationLoader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={EColors.PRIMARY_COLOR} />
        </View>
    )
}

export default ListPaginationLoader

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }
})