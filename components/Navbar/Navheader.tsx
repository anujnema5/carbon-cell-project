'use client'
import { useConfig } from '@/providers/Config'
import { IconMenu2, IconX } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

type Props = {
    logo: string,
}

const Navheader: React.FC<Props> = ({ logo }) => {
    const { handleMenu, menu } = useConfig()
    return (
        <div className='flex items-center w-full justify-between gap-10'>
            <Image src={logo} alt='logo' width={1000} height={1000} className='sm:w-52 w-40' />

            <button onClick={handleMenu}>
                {menu ?  <IconX/> :  <IconMenu2 />}
            </button>
        </div>
    )
}

export default Navheader