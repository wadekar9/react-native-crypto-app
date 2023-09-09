import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 813;

const scale = (size : number) => width / guidelineBaseWidth * size;
const verticalScale = (size : number) => height / guidelineBaseHeight * size;
const moderateScale = (size : number, factor : number = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

export const Fonts = {
    CIRCULAR_STD_BLACK : 'CircularStd-Black',
    CIRCULAR_STD_BOLD : 'CircularStd-Bold',
    CIRCULAR_STD_BOOK : 'CircularStd-Book',
    CIRCULAR_STD_MEDIUM : 'CircularStd-Medium',
    GOTHAM_BLACK: 'GothamBook',
    GOTHAM_BOLD: 'GothamBold',
    GOTHAM_MEDIUM : 'GothamMedium',
    GOTHAM_LIGHT : 'GothamLight'
}

export const Colors = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    PRIMARY_COLOR: '#0063F5',
    PRIMARY_BLACK_COLOR : '#212529',
    RED : '#D90429',
    GREEN : '#21BF73',
    GREY : '#6C757D',
    DARK_GREY : '#343A40',
    LIGHT_SKY : '#ECF4FF'
}

export const DEVICE_STYLES = {
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
}

export const DEVICE_STYLES_WITH_STATUSBAR = Dimensions.get('screen');