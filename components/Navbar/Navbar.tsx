'use client'
import React from 'react';
import Navheader from './Navheader';
import Search from './Search';
import { TNavLinks } from '@/data/navlinks';
import Links from './Links';
import Userseperator from './Userseperator';
import { useConfig } from '@/providers/Config';
import Mobilenav from './Mobilenav';

type Props = {
    imgUrl: string;
    navLinks: TNavLinks[];
    supportLinks: TNavLinks[];
};

const Navbar: React.FC<Props> = ({ imgUrl, navLinks, supportLinks }) => {
    const { menu } = useConfig();

    return (
        <>
            <div
                className={`hidden 2xl:w-[20%] lg:w-[25%] sm:w-[40%] w-full h-screen ease-in-out duration-300 scrollbar-thin scrollbar-thumb-transparent scrollbar-none bg-primary px-5 pt-10 pb-7 sm:flex flex-col gap-14 absolute ${menu ? 'translate-x-[0%] overflow-y-auto' : 'sm:-translate-x-[80%]'
                    }`}
            >
                <div className="flex flex-col gap-10">
                    <Navheader logo={imgUrl} />
                    {menu && <Search />}
                    <Links links={navLinks} />
                </div>

                <div className="flex flex-col gap-10">
                    <Links links={supportLinks} />
                    {menu && <Userseperator />}
                </div>
            </div>

            <Mobilenav imgUrl={imgUrl}
                navLinks={navLinks}
                supportLinks={supportLinks}
            />
        </>
    );
};

export default Navbar;
