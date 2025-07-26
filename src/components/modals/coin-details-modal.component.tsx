import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react'
import { IconButton } from '$components/common'
import { CloseCircle, HeartFill, HeartOutline } from '$assets/icons';
import { DEVICE_HEIGHT, DEVICE_WIDTH, EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { LineChart } from 'react-native-wagmi-charts';
import RNHapticFeedback from 'react-native-haptic-feedback';
import { CHART_TIMELINES } from '$constants/app.constants';
import { ICoinChartData, ICoinDetails } from '$utils/dto';
import apiService from '$utils/api';
import { formatNumber } from '$utils/helpers';
import { CoinDetailsModalSkeleton } from '$components/skeleton';
import { FadeAnimationContainerModal } from '.';

interface CoinDetailsModalProps { }

interface CoinDetailsModalRefProps {
    open: (id: string) => void;
    close: () => void;
}

const CoinDetailsModal = forwardRef<CoinDetailsModalRefProps, CoinDetailsModalProps>((props, ref) => {

    const coinID = useRef<string | undefined>(undefined);
    const timeoutListener = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [isChartLoading, setIsChartLoading] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [details, setDetails] = useState<ICoinDetails | null>(null);
    const [chartData, setChartData] = useState<Array<{ value: number, timestamp: number }>>([]);
    const [selectedTimeline, setSelectedTimeline] = useState<number>(0);

    function invokeHaptic() {
        RNHapticFeedback.trigger();
    }

    async function refetchChartData(timline: number) {
        if (timeoutListener.current) {
            clearTimeout(timeoutListener.current);
        }

        timeoutListener.current = setTimeout(() => {
            try {
                if (!coinID.current) return;
                setIsChartLoading(true)
                apiService.fetchCoinMarketChartApi(coinID.current, { vs_currency: 'usd', days: timline.toString() })
                    .then((response) => {
                        setChartData(response.prices.map((e) => ({ timestamp: e[0], value: e[1] })));
                        setIsChartLoading(false)
                    })
            } catch (error) {
                console.error("ERROR", error);
                setIsChartLoading(false);
            }
        }, 1000)
    }

    async function fetchCoinDetails(id: string) {
        try {
            const response = await Promise.all([
                apiService.fetchCoinMarketChartApi(id, { vs_currency: 'usd', days: CHART_TIMELINES[selectedTimeline].value.toString() }),
                apiService.fetchCoinDataApi(id, {
                    localization: false,
                    tickers: false,
                    market_data: true,
                    community_data: false,
                    developer_data: false,
                    sparkline: false,
                })
            ])

            const [coinChartData, coinDetails] = response as [ICoinChartData, ICoinDetails];
            setChartData(coinChartData.prices.map((e) => ({ timestamp: e[0], value: e[1] })));
            setDetails(coinDetails);
        } catch (error) {
            console.error(error);
        }
    }

    function handleClose() {
        setVisible(false);
        timeoutListener.current && clearTimeout(timeoutListener.current);
    }

    useImperativeHandle(ref, () => ({
        open: (e) => {
            coinID.current = e;
            fetchCoinDetails(e);
            setVisible(true);
        },
        close: () => handleClose()
    }), []);

    const ContentComponent = useCallback(() => {

        if (!(details && chartData)) return null;

        return (
            <>
                <View style={styles.section}>
                    <View style={styles.header}>
                        <View style={[styles.header, { justifyContent: 'flex-start', flex: 1 }]}>
                            <View style={styles.icon}>
                                <Image style={{ width: '100%', height: '100%' }} source={{ uri: details?.image.large }} />
                            </View>
                            <View style={{ flexGrow: 1, flexShrink: 1, overflow: 'hidden', gap: moderateScale(2) }}>
                                <Text style={styles.title}>{details?.name} <Text style={{ textTransform: 'uppercase' }}>({details?.symbol})</Text></Text>
                                <Text style={styles.rank}>#{details?.market_cap_rank}</Text>
                            </View>
                        </View>

                        <View style={[styles.header, { justifyContent: 'center' }]}>
                            <IconButton>
                                <HeartOutline width={moderateScale(24)} height={moderateScale(24)} />
                                {/* <HeartFill fill={EColors.RED} width={moderateScale(24)} height={moderateScale(24)} /> */}
                            </IconButton>
                            <IconButton onPress={() => handleClose()}>
                                <CloseCircle fill={EColors.GREY} width={moderateScale(24)} height={moderateScale(24)} />
                            </IconButton>
                        </View>
                    </View>

                    {details.market_data?.current_price?.usd && (
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>{formatNumber(details.market_data?.current_price?.usd, { style: 'currency', currency: 'USD' })}</Text>
                            <Text style={[styles.priceChange, { color: details.market_data?.price_change_24h < 0 ? EColors.RED : EColors.GREEN }]}>
                                {formatNumber(details.market_data?.price_change_24h, { style: 'currency', currency: 'USD' })} ({details.market_data?.price_change_percentage_24h}%)
                            </Text>
                        </View>
                    )}
                </View>

                <View style={styles.content}>
                    <View style={{ minWidth: DEVICE_WIDTH, minHeight: DEVICE_HEIGHT * 0.48 }}>
                        {(chartData.length > 0) && (
                            <LineChart.Provider data={chartData}>
                                <LineChart width={DEVICE_WIDTH} height={DEVICE_HEIGHT * 0.5}>
                                    <LineChart.Path color={EColors.PRIMARY_COLOR}>
                                        <LineChart.Gradient />
                                    </LineChart.Path>
                                    <LineChart.CursorCrosshair color={EColors.PRIMARY_COLOR} onActivated={invokeHaptic} onEnded={invokeHaptic}>
                                        <LineChart.Tooltip
                                            textStyle={{
                                                fontFamily: EFonts.MEDIUM,
                                                fontSize: EFontSize['2XL'],
                                                color: EColors.BLACK
                                            }}
                                        />
                                    </LineChart.CursorCrosshair>
                                    <LineChart.CursorLine />
                                </LineChart>
                                <LineChart.PriceText
                                    precision={10}
                                    style={{
                                        fontFamily: EFonts.MEDIUM,
                                        fontSize: EFontSize.XL,
                                        color: EColors.BLACK,
                                        left: moderateScale(10)
                                    }}
                                />
                                <LineChart.DatetimeText
                                    style={{
                                        fontFamily: EFonts.MEDIUM,
                                        fontSize: EFontSize.BASE,
                                        color: EColors.DARK_GREY,
                                        left: moderateScale(10)
                                    }}
                                />
                            </LineChart.Provider>
                        )}

                        {isChartLoading && <FadeAnimationContainerModal containerStyle={styles.fadeAnimationContainer} />}
                    </View>


                    <View style={{ flexGrow: 1, paddingBottom: moderateScale(20), top: moderateScale(5) }}>
                        <View style={[styles.section, { padding: 0 }]}>
                            <View style={[styles.timlines]}>
                                {CHART_TIMELINES.map((timeline, idx) => (
                                    <IconButton
                                        onPress={() => {
                                            setSelectedTimeline(idx);
                                            refetchChartData(CHART_TIMELINES[idx].value)
                                        }}
                                        key={`${idx}`}
                                        style={[styles.timelineWrapper, idx == selectedTimeline && { borderColor: EColors.PRIMARY_COLOR }]}
                                    >
                                        <Text style={[styles.timlineText, idx == selectedTimeline && { color: EColors.PRIMARY_COLOR }]}>{timeline.label}</Text>
                                    </IconButton>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }, [details, chartData, coinID])

    return (
        <>
            <Modal
                visible={visible}
                transparent={true}
                onRequestClose={() => handleClose()}
                onDismiss={() => handleClose()}
                animationType={'slide'}
                statusBarTranslucent
            >
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        {!(details && chartData) && (<CoinDetailsModalSkeleton onRequestClose={() => handleClose()} />)}
                        {(details && chartData) && <ContentComponent key={'coin-details-key'} />}
                    </View>
                </View>
            </Modal>
        </>
    )
})

export default CoinDetailsModal

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    content: {
        flex: 1,
        flexGrow: 1,
    },
    container: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.8,
        backgroundColor: EColors.WHITE,
        borderTopLeftRadius: moderateScale(25),
        borderTopRightRadius: moderateScale(25),
    },
    section: {
        width: '100%',
        padding: moderateScale(20),
        gap: moderateScale(16)
    },
    header: {
        flexShrink: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: moderateScale(12)
    },
    icon: {
        width: moderateScale(55),
        height: moderateScale(55),
        aspectRatio: 1,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: EColors.BORDER_COLOR
    },
    title: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XL,
        color: EColors.BLACK
    },
    rank: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.BASE,
        color: EColors.GREY
    },
    priceContainer: {
        gap: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    price: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize["3XL"] - 2,
        color: EColors.BLACK
    },
    priceChange: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XL,
        color: EColors.GREEN
    },
    timlines: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingVertical: moderateScale(2.5)
    },
    timelineWrapper: {
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(100),
        borderColor: EColors.BORDER_COLOR,
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(2),
    },
    timlineText: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.SM,
        color: EColors.GREY,
        textAlign: 'center'
    },
    fadeAnimationContainer: {
        width: DEVICE_WIDTH,
        height: '100%',
        position: 'absolute'
    }
})