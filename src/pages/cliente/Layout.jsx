import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import "./Layout.scss"

export const Layout = () => {

    const location = useLocation();

    return (
        <div className="grid">
            <div className="grid__aside">
                <div className="aside--fixed"></div>
                <h2 className="aside--titulo">CRM - Clientes</h2>
                <nav className="navegacion">
                    <Link 
                        to="/clientes" 
                        className={`${location.pathname === "/clientes" && "active"}`}
                    >Clientes</Link>
                    <Link 
                        to="/clientes/nuevo"
                        className={`${location.pathname === "/clientes/nuevo" && "active"}`}    
                    >Nuevo Cliente</Link>
                </nav>
            </div>
            <div className="grid__tarea">
                <Outlet />
            </div>
        </div>
    )
}
