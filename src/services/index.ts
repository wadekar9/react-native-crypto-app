import { showMessage } from 'react-native-flash-message';
import { getUniqueId } from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';
import moment from 'moment';
import { Messages } from '@utils/messages';
import { EMAIL_REGEX } from '@utils/constant';
import { Colors, Fonts, moderateScale } from '@utils/theme';
import { ToastMessage } from 'src/types';

export const getTimeDuration = (seconds: number = 0): string => {
    return `${Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0")}:${Math.floor((seconds % 3600) / 60)
            .toString()
            .padStart(2, "0")}:${(seconds % 60).toFixed(0)
                .toString()
                .padStart(2, "0")}`
}

export const triggerToastMessage = ({ message, isPositive = false, type, duration }: ToastMessage) => {

    showMessage({
        autoHide: true,
        position: 'top',
        duration: duration || 3000,
        type: type ? type : isPositive ? 'success' : 'danger',
        message: message || Messages.SERVER,
        titleStyle: {
            fontFamily: Fonts.Bold,
            fontSize: moderateScale(14),
            color: Colors.WHITE
        },
        textStyle: {
            fontFamily: Fonts.Bold,
            fontSize: moderateScale(15),
            color: Colors.WHITE
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
export const displayDate = (date: number = Date.now()): string => moment(new Date(date)).format('dddd, LT').toString();

/** 
    @param {number} - Date.now() date
    @returns {string} - date string with "DD MMMM YYYY, hh:mm A" format
*/
export const displatFullDate = (date: number = Date.now()): string => moment(new Date(date)).format('DD MMMM YYYY, hh:mm A').toString();

/** 
    @returns {string} - device unique id
*/
export const getDeviceUniqueId = async () => await getUniqueId();

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