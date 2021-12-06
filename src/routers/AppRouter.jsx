import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from '../auth/Login';
import { Layout } from '../pages/cliente/Layout';
import { LoginForm } from '../components/LoginForm';
import { EditarCliente } from '../pages/EditarCliente';
import { Inicio } from '../pages/Inicio';
import { NuevoCliente } from '../pages/NuevoCliente';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={ <Login /> }>
                    <Route index element={ <LoginForm /> }/>
                </Route> */}
                <Route path="/clientes" element={ <Layout /> }>
                    <Route index element={ <Inicio /> }/>
                    <Route path="nuevo" element={ <NuevoCliente /> }/>
                    <Route path="editar/:id" element={ <EditarCliente /> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
