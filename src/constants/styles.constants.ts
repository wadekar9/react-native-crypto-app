import { Dimensions } from "react-native";

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

const guidelineBaseWidth = 430;

const scale = (size: number) => DEVICE_WIDTH / guidelineBaseWidth * size;
const moderateScale = (size: number, factor: number = 0.5) => size + (scale(size) - size) * factor;

export { moderateScale, DEVICE_WIDTH, DEVICE_HEIGHT };

export enum EFonts {
    BLACK = 'Poppins-Black',
    BOLD = 'Poppins-Bold',
    LIGHT = 'Poppins-Light',
    MEDIUM = 'Poppins-Medium',
    REGULAR = 'Poppins-Regular',
    SEMI_BOLD = 'Poppins-SemiBold',
    THIN = 'Poppins-Thin'
}

export enum EFontSize {
    '3XL' = 26,
    '2XL' = 18,
    XL = 16,
    LG = 15,
    BASE = 14,
    SM = 13,
    XS = 12
}


export enum EColors {
    WHITE = '#FFFFFF',
    BLACK = '#000000',
    PRIMARY_COLOR = '#0063F5',
    PRIMARY_BLACK_COLOR = '#212529',
    RED = '#D90429',
    GREEN = '#21BF73',
    GREY = '#6C757D',
    ORANGE = '#F59300',
    VIOLET = '#9300F5',
    PINK = '#F50062',
    DARK_GREY = '#343A40',
    LIGHT_SKY = '#ECF4FF',
    BACKGROUND_COLOR = '#F8F9FA',
    BORDER_COLOR = '#DFE2E4',
    TRANSPARENT = '#00000000'
}