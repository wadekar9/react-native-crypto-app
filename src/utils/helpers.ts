import { MessageOptions, showMessage } from 'react-native-flash-message';
import { EColors, EFonts, moderateScale } from '$constants/styles.constants';
import { fetch } from '@react-native-community/netinfo';
import { EMessages } from '$constants/messages.constants';
import { Platform, StatusBar } from 'react-native';

export function showFlashMessage(props: MessageOptions) {

    showMessage({
        ...props,
        animated: true,
        duration: 3000,
        position: 'top',
        statusBarHeight: Platform.OS == 'ios' ? StatusBar.currentHeight || 30 : 0,
        hideOnPress: true,
        textStyle: {
            fontFamily: EFonts.MEDIUM,
            fontSize: moderateScale(14),
            color: EColors.WHITE,
            letterSpacing: 0.5
        },
        titleStyle: {
            fontFamily: EFonts.SEMI_BOLD,
            fontSize: moderateScale(15),
            color: EColors.WHITE,
            letterSpacing: 0.5
        },
        textProps: { numberOfLines: 2 },
        titleProps: { numberOfLines: 2 }
    })
}

export const showErrorFlashMessage = async (error: any) => {

    const isConnected = (await fetch()).isConnected

    if (!isConnected) {
        showFlashMessage({
            message: EMessages.UNABLE_PROCEED,
            description: EMessages.INTERNET_CONNECTION,
            type: 'danger'
        })
        return;
    }

    if (error) {
        let message = typeof error?.message == 'string' ? error?.message : (typeof error === 'string') ? error : EMessages.WENT_WRONG;
        showFlashMessage({
            message: EMessages.UNABLE_PROCEED,
            description: message,
            type: 'danger'
        })
    } else {
        showFlashMessage({
            message: EMessages.UNABLE_PROCEED,
            description: EMessages.WENT_WRONG,
            type: 'danger'
        })
    }
}

/** 
    @param {number} - Date.now() date
    @returns {string} - date string with "dddd, LT" format
*/
export const displayDate = (date: number = Date.now()): string => (new Date(date)).toLocaleString();

/** 
    @param {number} - Date.now() date
    @returns {string} - date string with "DD MMMM YYYY, hh:mm A" format
*/
export const displatFullDate = (date: number = Date.now()): string => (new Date(date)).toLocaleString();

export const convertToQueryParams = (params: Record<string, any>) => {
    const keyValuePairs = [];
    for (const key in params) {
        if (encodeURIComponent(params[key])) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
        }
    }
    return keyValuePairs.length > 0 ? `?${keyValuePairs.join('&')}` : '';
}

export const formatNumber = (
    value: number | string,
    options?: {
        minimumFractionDigits?: number
        maximumFractionDigits?: number
        currency?: string // e.g., 'USD', 'INR'
        style?: 'decimal' | 'currency'
        locale?: string // default: 'en-US'
    }
): string => {
    const num = typeof value === 'string' ? parseFloat(value) : value
    if (isNaN(num)) return '0'

    const {
        minimumFractionDigits = 2,
        maximumFractionDigits = 6,
        currency,
        style = currency ? 'currency' : 'decimal',
        locale = 'en-US',
    } = options || {}

    try {
        return num.toLocaleString(locale, {
            style,
            currency,
            minimumFractionDigits,
            maximumFractionDigits,
        })
    } catch (e) {
        // fallback if toLocaleString fails
        return num ? num?.toFixed(minimumFractionDigits) : '';
    }
}
