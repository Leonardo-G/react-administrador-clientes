import React from 'react'
import { Outlet } from 'react-router'

export const Login = () => {
    return (
        <div>
            <h1>Desde Login</h1>
            <Outlet />
        </div>
    )
}
