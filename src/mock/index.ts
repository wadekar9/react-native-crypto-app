import { BankIcon, HistoryIcon, LogOutIcon, NotificationIcon, SecurityIcon, SupportIcon, DocumentIcon } from '@assets/icons';
import { ProfileMenusProps } from '@types';

export const ProfileMenus : ProfileMenusProps[] = [
    {
        id : 1,
        label : 'Bank Details',
        icon : BankIcon
    },
    {
        id : 2,
        label : 'History',
        icon : HistoryIcon
    },
    {
        id : 3,
        label : 'Notifications',
        icon : NotificationIcon
    },
    {
        id : 4,
        label : 'Security',
        icon : SecurityIcon
    },
    {
        id : 5,
        label : 'Help & Support',
        icon : SupportIcon
    },
    {
        id : 6,
        label : 'Terms and Conditions',
        icon : DocumentIcon
    },
    {
        id : 7,
        label : 'Log Out',
        icon : LogOutIcon
    }
]