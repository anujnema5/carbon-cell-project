import { user } from '@/data/temperory-static.data'
import { IconDotsVertical } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

const Userseperator = () => {

    return (
        <div className='max-w-80 bg-secondary h-20 rounded-lg flex flex-col items-center justify-center'>
            <div className='flex items-center gap-3'>

                <div className="relative">
                    {user.status === 'online' ? <div className='w-2.5 h-2.5 rounded-[50%] bg-green-500 absolute right-0'></div> : ""}
                    <Image alt='avatar' src={user.imgUrl} width={1000} height={1000} className='rounded-full w-10 h-10 object-cover' />
                </div>

                <div className="">
                    <h3>{user.fullName}</h3>
                    <span className='text-gray-400'>{user.mail}</span>
                </div>

                <IconDotsVertical className='text-gray-400' />
            </div>
        </div>
    )
}

export default Userseperator