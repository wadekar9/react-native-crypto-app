import { showMessage } from 'react-native-flash-message';
import NetInfo from '@react-native-community/netinfo';
import { Messages } from '$utils/messages';
import { EMAIL_REGEX } from '$utils/constant';
import { EColors, EFonts, moderateScale } from '$constants/styles.constants';
import { IToastMessage } from '$types/common';

export const getTimeDuration = (seconds: number = 0): string => {
    return `${Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0")}:${Math.floor((seconds % 3600) / 60)
            .toString()
            .padStart(2, "0")}:${(seconds % 60).toFixed(0)
                .toString()
                .padStart(2, "0")}`
}

export const triggerToastMessage = ({ message, isPositive = false, type, duration }: IToastMessage) => {

    showMessage({
        autoHide: true,
        position: 'top',
        duration: duration || 3000,
        type: type ? type : isPositive ? 'success' : 'danger',
        message: message || Messages.SERVER,
        titleStyle: {
            fontFamily: EFonts.BOLD,
            fontSize: moderateScale(14),
            color: EColors.WHITE
        },
        textStyle: {
            fontFamily: EFonts.BOLD,
            fontSize: moderateScale(15),
            color: EColors.WHITE
        },
        icon: 'auto'
    });
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

/** 
*    @returns {boolean} - internet connection
*/
export const internetConnection = async () => {
    const state = await NetInfo.fetch();
    if (!state.isConnected) {
        triggerToastMessage({
            message: 'No Internet',
            description: Messages.NO_INTERNET_MESSAGE
        })
        return false;
    } else {
        return true;
    }
};