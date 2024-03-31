'use client'
import {
    IconHome,
    IconBuilding,
    IconBrandUnity,
    IconArrowsUpDown,
    IconHourglassEmpty,
    IconWallet,
    IconSettings,
    IconHelp,
    IconBell
} from '@tabler/icons-react';


export type TNavLinks = {
    title: string,
    href: string,
    Icon: any
}

export const navlinks: TNavLinks[] = [
    { title: 'Home', href: '/home', Icon: IconHome },
    { title: 'Organization', href: '/organization', Icon: IconBuilding },
    { title: 'Assets', href: '/assets', Icon: IconBrandUnity },
    { title: 'Trade', href: '/trade', Icon: IconArrowsUpDown },
    { title: 'History', href: '/history', Icon: IconHourglassEmpty },
    { title: 'Wallet', href: '/wallet', Icon: IconWallet }
];

export const supportLinks: TNavLinks[] = [
    { title: 'Notifications', href: '/notifications', Icon: IconBell },
    { title: 'Support', href: '/support', Icon: IconHelp },
    { title: 'Settings', href: '/settings', Icon: IconSettings },
]