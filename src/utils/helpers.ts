import { MessageOptions, showMessage } from 'react-native-flash-message';
import { EMAIL_REGEX } from '$utils/constant';
import { EColors, EFonts, moderateScale } from '$constants/styles.constants';
import { fetch } from '@react-native-community/netinfo';
import { EMessages } from '$constants/messages.constants';
import { Platform, StatusBar } from 'react-native';

export const getTimeDuration = (seconds: number = 0): string => {
    return `${Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0")}:${Math.floor((seconds % 3600) / 60)
            .toString()
            .padStart(2, "0")}:${(seconds % 60).toFixed(0)
                .toString()
                .padStart(2, "0")}`
}

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

export const validateEmail = (email: string) => new String(email).toLowerCase().match(EMAIL_REGEX);

export const displayAmountWithUnit = (amount: number = 0): string => Number(amount).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

export const displayRating = (rat: number, from: number = 5) => `(${rat}/${from})`;

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