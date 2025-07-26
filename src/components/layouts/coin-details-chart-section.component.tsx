import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { IconButton } from '$components/common';
import { LineChart } from 'react-native-wagmi-charts';
import RNHapticFeedback from 'react-native-haptic-feedback';
import { CHART_TIMELINES } from '$constants/app.constants';
import { DEVICE_HEIGHT, DEVICE_WIDTH, EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { FadeAnimationContainerModal } from '$components/modals';

interface ChartDataPoint {
  value: number;
  timestamp: number;
}

const CoinDetailsChartSection: React.FC<{
  chartData: ChartDataPoint[];
  isChartLoading: boolean;
  selectedTimeline: number;
  onTimelineChange: (index: number, value: number) => void;
}> = (props) => {

  const { chartData, isChartLoading, selectedTimeline, onTimelineChange } = props;

  return (
    <View style={styles.content}>
      <View style={styles.chartContainer}>
        {chartData.length > 0 && (
          <LineChart.Provider data={chartData}>
            <LineChart width={DEVICE_WIDTH} height={DEVICE_HEIGHT * 0.5}>
              <LineChart.Path color={EColors.PRIMARY_COLOR}>
                <LineChart.Gradient />
              </LineChart.Path>
              <LineChart.CursorCrosshair
                color={EColors.PRIMARY_COLOR}
                onActivated={() => RNHapticFeedback.trigger()}
                onEnded={() => RNHapticFeedback.trigger()}
              >
                <LineChart.Tooltip textStyle={styles.tooltipText} />
              </LineChart.CursorCrosshair>
              <LineChart.CursorLine />
            </LineChart>
            <LineChart.PriceText style={styles.priceText} precision={10} />
            <LineChart.DatetimeText style={styles.datetimeText} />
          </LineChart.Provider>
        )}
        {isChartLoading && <FadeAnimationContainerModal containerStyle={styles.fadeAnimationContainer} />}
      </View>
      <View style={styles.timelinesContainer}>
        <View style={styles.timlines}>
          {CHART_TIMELINES.map((timeline, idx) => (
            <IconButton
              key={timeline.label}
              onPress={() => onTimelineChange(idx, timeline.value)}
              style={[styles.timelineWrapper, idx === selectedTimeline && { borderColor: EColors.PRIMARY_COLOR }]}
            >
              <Text style={[styles.timlineText, idx === selectedTimeline && { color: EColors.PRIMARY_COLOR }]}>
                {timeline.label}
              </Text>
            </IconButton>
          ))}
        </View>
      </View>
    </View>
  )
}

export default CoinDetailsChartSection

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  chartContainer: {
    minWidth: DEVICE_WIDTH,
    minHeight: DEVICE_HEIGHT * 0.48,
  },
  tooltipText: {
    fontFamily: EFonts.MEDIUM,
    fontSize: EFontSize['2XL'],
    color: EColors.BLACK,
  },
  priceText: {
    fontFamily: EFonts.MEDIUM,
    fontSize: EFontSize.XL,
    color: EColors.BLACK,
    left: moderateScale(10),
  },
  datetimeText: {
    fontFamily: EFonts.MEDIUM,
    fontSize: EFontSize.BASE,
    color: EColors.DARK_GREY,
    left: moderateScale(10),
  },
  timelinesContainer: {
    flexGrow: 1,
    paddingBottom: moderateScale(20),
    top: moderateScale(5),
  },
  timlines: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingVertical: moderateScale(2.5),
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
    textAlign: 'center',
  },
  fadeAnimationContainer: {
    width: DEVICE_WIDTH,
    height: '100%',
    position: 'absolute',
  }
});