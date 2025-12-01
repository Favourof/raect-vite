import React, { useContext } from 'react'
import Dashboard from './Dashboard'
import { UserContext } from '../Context/context'

export default function Settings() {
    const { user } = useContext(UserContext)
    console.log(user);

    return (
        <>

            <div>Settings</div>
        </>


    )
}
