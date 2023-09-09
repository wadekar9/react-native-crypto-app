import { MessageOptions } from 'react-native-flash-message';

export interface ToastMessage extends MessageOptions { 
    isPositive? :  boolean
}