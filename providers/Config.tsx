'use client'
import { TNavLinks } from '@/data/navlinks';
import React, { createContext, useContext, useState } from 'react';

type TCongifContext = {
    menu: boolean,
    handleMenu: () => any,
    handleSelectedLink: (link: TNavLinks['href']) => any,
    selectedLink: TNavLinks['href'] | null
}

export const ConfigContext = createContext<TCongifContext | null>(null);

const Config = ({ children }: { children: React.ReactNode }) => {
    const [menu, setMenu] = useState<boolean>(true);
    const [selectedLink, setSelectedLink] = useState<TNavLinks['href'] | null>(null);

    const handleMenu = () => {
        setMenu(!menu);
    };

    const handleSelectedLink = (link: TNavLinks['href']) => {
        setSelectedLink(link);
    }

    return (
        <ConfigContext.Provider value={{ menu, handleMenu, handleSelectedLink, selectedLink }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => {
    const config = useContext(ConfigContext);
    if (!config) throw new Error('useConfig must be used within a ConfigProvider');
    return config;
};

export default Config;