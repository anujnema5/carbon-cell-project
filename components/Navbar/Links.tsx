'use client'
import { TNavLinks } from '@/data/navlinks'
import { useConfig } from '@/providers/Config'
import React from 'react'

type Props = {
    links: TNavLinks[]
}

const Links: React.FC<Props> = ({ links }) => {
    const { handleSelectedLink, selectedLink, menu } = useConfig()
    return (
        <div>
            <ul className='flex flex-col gap-3'>
                {links?.map(({ Icon, href, title }) => (
                    <div key={href} className={`flex items-center gap-3 font-semibold cursor-pointer px-2 rounded-lg ease-in-out duration-300 transition-all py-4 ${selectedLink === href && menu && "bg-secondary"}`} onClick={() => handleSelectedLink(href)}>
                        <Icon />
                        <span>{title}</span>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Links