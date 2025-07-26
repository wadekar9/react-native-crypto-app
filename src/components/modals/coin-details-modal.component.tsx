import { View, Text, Image, StyleSheet, Modal } from 'react-native';
import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState, useMemo, useEffect } from 'react';
import { DEVICE_HEIGHT, DEVICE_WIDTH, EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { CHART_TIMELINES } from '$constants/app.constants';
import { ICoinDetailsDto } from '$utils/dto';
import apiService from '$utils/api';
import { handleAddCoinToFavourite } from '$utils/helpers';
import { CoinDetailsModalSkeleton } from '$components/skeleton';
import { CoinDetailsChartSection, CoinDetailsHeaderSection } from '$components/layouts';

interface CoinDetailsModalRefProps {
    open: (id: string) => void;
    close: () => void;
}

interface ChartDataPoint {
    value: number;
    timestamp: number;
}

// Constants
const DEBOUNCE_DELAY = 1000;

const CoinDetailsModal = forwardRef<CoinDetailsModalRefProps, any>((_, ref) => {
    const coinID = useRef<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isMounted = useRef<boolean>(true);

    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const [isChartLoading, setIsChartLoading] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [details, setDetails] = useState<ICoinDetailsDto | null>(null);
    const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
    const [selectedTimeline, setSelectedTimeline] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    // Cleanup on unmount
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const fetchCoinDetails = useCallback(async (id: string) => {
        try {
            setError(null);
            const [coinChartData, coinDetails] = await Promise.all([
                apiService.fetchCoinMarketChartApi(id, { vs_currency: 'usd', days: CHART_TIMELINES[selectedTimeline].value.toString() }),
                apiService.fetchCoinDataApi(id, {
                    localization: false,
                    tickers: false,
                    market_data: true,
                    community_data: false,
                    developer_data: false,
                    sparkline: false,
                }),
            ]);
            if (isMounted.current) {
                setChartData(coinChartData.prices.map(([timestamp, value]) => ({ timestamp, value })));
                setDetails(coinDetails);
            }
        } catch (err) {
            if (isMounted.current) {
                setError('Failed to fetch coin details. Please try again.');
                console.error('Fetch error:', err);
            }
        }
    }, [selectedTimeline]);

    const refetchChartData = useCallback(async (timeline: number) => {
        if (!coinID.current || !isMounted.current) return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setIsChartLoading(true);
        timeoutRef.current = setTimeout(async () => {
            try {
                const response = await apiService.fetchCoinMarketChartApi(coinID.current!, {
                    vs_currency: 'usd',
                    days: timeline.toString(),
                });
                if (isMounted.current) {
                    setChartData(response.prices.map(([timestamp, value]) => ({ timestamp, value })));
                }
            } catch (err) {
                if (isMounted.current) {
                    setError('Failed to fetch chart data. Please try again.');
                    console.error('Chart fetch error:', err);
                }
            } finally {
                if (isMounted.current) {
                    setIsChartLoading(false);
                }
            }
        }, DEBOUNCE_DELAY);
    },
        []
    );

    const handleClose = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setVisible(false);
        setDetails(null);
        setChartData([]);
        setError(null);
        setIsFavourite(false);
        coinID.current = null;
    }, []);

    const handleTimelineChange = useCallback((index: number, value: number) => {
        setSelectedTimeline(index);
        refetchChartData(value);
    }, [refetchChartData]);

    const handleToggleFavourite = useCallback(() => {
        if (details) {
            handleAddCoinToFavourite([details], isFavourite ? 'delete' : 'add');
            setIsFavourite((prev) => !prev);
        }
    }, [details, isFavourite]);

    useImperativeHandle(ref, () => ({
        open: (id: string) => {
            coinID.current = id;
            fetchCoinDetails(id);
            setVisible(true);
        },
        close: handleClose,
    }), [fetchCoinDetails, handleClose]);

    const ContentComponent = useMemo(
        () =>
            details && chartData.length > 0 ? (
                <>
                    <CoinDetailsHeaderSection
                        details={details}
                        isFavourite={isFavourite}
                        onToggleFavourite={handleToggleFavourite}
                        onClose={handleClose}
                    />
                    <CoinDetailsChartSection
                        chartData={chartData}
                        isChartLoading={isChartLoading}
                        selectedTimeline={selectedTimeline}
                        onTimelineChange={handleTimelineChange}
                    />
                    {error && <Text style={styles.errorText}>{error}</Text>}
                </>
            ) : null,
        [details, chartData, isFavourite, isChartLoading, selectedTimeline, handleToggleFavourite, handleClose, handleTimelineChange, error]
    );

    return (
        <Modal
            visible={visible}
            transparent={true}
            onRequestClose={handleClose}
            onDismiss={handleClose}
            animationType="slide"
            statusBarTranslucent
        >
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    {!ContentComponent ? (
                        <CoinDetailsModalSkeleton onRequestClose={handleClose} />
                    ) : (
                        ContentComponent
                    )}
                </View>
            </View>
        </Modal>
    );
});

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    container: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.8,
        backgroundColor: EColors.WHITE,
        borderTopLeftRadius: moderateScale(25),
        borderTopRightRadius: moderateScale(25),
    },
    errorText: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.BASE,
        color: EColors.RED,
        textAlign: 'center',
        padding: moderateScale(10),
    },
});

export default CoinDetailsModal;