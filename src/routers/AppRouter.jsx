import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from '../auth/Login';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login /> }>
                    <Route />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
