import { BankIcon, HistoryIcon, LogOutIcon, NotificationIcon, SecurityIcon, SupportIcon, DocumentIcon } from '$assets/icons';
import { ProfileMenusProps, MarketListItemProps, CustomKeyboardKeysItemProps } from '$types/common';
import { moderateScale } from '$utils/theme';

export const ProfileMenus: ProfileMenusProps[] = [
    {
        id: 1,
        label: 'Bank Details',
        icon: BankIcon
    },
    {
        id: 2,
        label: 'History',
        icon: HistoryIcon,
        screenName: 'HistoryScreen'
    },
    {
        id: 3,
        label: 'Notifications',
        icon: NotificationIcon
    },
    {
        id: 4,
        label: 'Security',
        icon: SecurityIcon
    },
    {
        id: 5,
        label: 'Help & Support',
        icon: SupportIcon
    },
    {
        id: 6,
        label: 'Terms and Conditions',
        icon: DocumentIcon
    },
    {
        id: 7,
        label: 'Log Out',
        icon: LogOutIcon
    }

];

export const marketsList: MarketListItemProps[] = [
    {
        label: 'Indian - INR',
        id: 1
    },
    {
        label: 'Bitcoin - BTC',
        id: 2
    },
    {
        label: 'TetherUS - USDT',
        id: 3
    }
];

export const customKeyboardKeys: CustomKeyboardKeysItemProps[] = [
    {
        label: '1',
        isIcon: false,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        label: '2',
        isIcon: false,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        label: '3',
        isIcon: false,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        label: '4',
        isIcon: false,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        label: '5',
        isIcon: false,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        label: '6',
        isIcon: false,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        label: '7',
        isIcon: false,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        label: '8',
        isIcon: false,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        label: '9',
        isIcon: false,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        label: '.',
        isIcon: false,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        label: '0',
        isIcon: false,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        label: 'back',
        isIcon: true,
        externalStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
]