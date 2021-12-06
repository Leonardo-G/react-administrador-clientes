import React from 'react';
import { Outlet } from 'react-router';
import "./Layout.scss"

export const Layout = () => {
    return (
        <div className="grid">
            <div className="grid__aside">
                <div className="aside--fixed"></div>
                <h2>CRM - Clientes</h2>
                <nav>
                    <a href="/clientes">Clientes</a>
                    <a href="/clientes/nuevo">Nuevo Cliente</a>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
