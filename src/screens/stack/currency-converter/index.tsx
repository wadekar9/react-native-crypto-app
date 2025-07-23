import { ScrollView, Text, View, ActivityIndicator, Animated, Easing } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { BaseButton, BaseDropdown, BaseLayout, BaseTextInput } from '$components/common'
import { BackHeader } from '$components/navigation'
import { styles } from './styles'
import {
    COIN_ICONS,
    COIN_LIST,
    COIN_SYMBOLS,
    CURRENCY_LIST,
    CURRENCY_SYMBOLS
} from '$constants/converter.constants'
import { EColors } from '$constants/styles.constants'
import apiService from '$utils/api'
import { formatNumber } from '$utils/helpers'

const CurrencyConverter = () => {

    const [amount, setAmount] = useState<string>('')
    const [selectedCoin, setSelectedCoin] = useState<string>('')
    const [selectedCurrency, setSelectedCurrency] = useState<string>('')
    const [convertedAmount, setConvertedAmount] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const animationValue = useRef(new Animated.Value(0)).current

    const animateResult = () => {
        animationValue.setValue(0)
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 600,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true
        }).start()
    }

    const onReset = useCallback(() => {
        setAmount('')
        setSelectedCoin('')
        setSelectedCurrency('')
        setConvertedAmount('')
        setError('')
    }, [])

    const handleCalculate = useCallback(async () => {
        if (!amount || !selectedCoin || !selectedCurrency) return

        try {
            setIsLoading(true)
            setError('')
            const response = await apiService.fetchCoinsPricesApi({
                ids: selectedCoin,
                vs_currencies: selectedCurrency
            })

            const price = response?.[selectedCoin]?.[selectedCurrency]

            if (price && !isNaN(Number(amount))) {
                const total = Number(amount) * price
                const formatted = total.toFixed(2)
                setConvertedAmount(formatted)
                animateResult()
            } else {
                setConvertedAmount('0.00')
            }
        } catch (err) {
            setError('Failed to convert. Please try again.')
            setConvertedAmount('')
        } finally {
            setIsLoading(false)
        }
    }, [amount, selectedCoin, selectedCurrency])

    const canCalculate = amount && selectedCoin && selectedCurrency && !isLoading

    const animatedStyle = {
        opacity: animationValue,
        transform: [
            {
                scale: animationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.95, 1]
                })
            }
        ]
    }

    return (
        <BaseLayout>
            <BackHeader headerName={'Cryptocurrency Converter'} />
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer} scrollEventThrottle={16}>
                    <BaseTextInput
                        value={amount}
                        onChangeText={setAmount}
                        label="Amount"
                        placeholder="Enter amount here."
                        keyboardType="decimal-pad"
                    />

                    <BaseDropdown
                        data={COIN_LIST}
                        value={selectedCoin}
                        onValueChange={setSelectedCoin}
                        label="Coin"
                        placeholder="Select coin from here."
                        icon={COIN_ICONS[selectedCoin as keyof typeof COIN_ICONS]}
                    />

                    <BaseDropdown
                        data={CURRENCY_LIST}
                        value={selectedCurrency}
                        onValueChange={setSelectedCurrency}
                        label="Currency"
                        placeholder="Select currency from here."
                    />

                    <View style={styles.actions}>
                        <View style={styles.action}>
                            <BaseButton
                                label={isLoading ? 'Calculating...' : 'Calculate'}
                                onPress={handleCalculate}
                                disabled={!canCalculate}
                            />
                        </View>
                        <View style={styles.action}>
                            <BaseButton
                                label="Reset"
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                    borderWidth: 1,
                                    borderColor: EColors.PRIMARY_COLOR
                                }}
                                labelStyle={{ color: EColors.PRIMARY_COLOR }}
                                onPress={onReset}
                            />
                        </View>
                    </View>

                    {!!error && (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    )}

                    {isLoading && (
                        <View style={styles.loader}>
                            <ActivityIndicator size="small" color={EColors.PRIMARY_COLOR} />
                        </View>
                    )}

                    {!!convertedAmount && !isLoading && (
                        <Animated.View style={[styles.resultSection, animatedStyle, { backgroundColor: EColors.LIGHT_SKY, borderColor: EColors.PRIMARY_COLOR }]}>
                            <Text style={[styles.resultText]}>
                                {`${COIN_SYMBOLS[selectedCoin as keyof typeof COIN_SYMBOLS] || ''}${formatNumber(amount)} `}
                                <Text>=</Text>
                                {` ${CURRENCY_SYMBOLS[selectedCurrency as keyof typeof CURRENCY_SYMBOLS] || ''} ${formatNumber(convertedAmount)}`}
                            </Text>
                        </Animated.View>
                    )}

                </ScrollView>
            </View>
        </BaseLayout>
    )
}

export default CurrencyConverter
