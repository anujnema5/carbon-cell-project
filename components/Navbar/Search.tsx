import React from 'react'
import { IconSearch } from '@tabler/icons-react'
import Input from '../Input/Input'

const Search = (props: any) => {
    return (
        <Input
            placeholder='Search'
            Icon={IconSearch}
            {...props}
        />
    )
}

export default Search