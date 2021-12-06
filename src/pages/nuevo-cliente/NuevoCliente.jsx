import React from 'react'
import { Formulario } from '../../components/formulario/Formulario';
import "./NuevoCliente.scss"

export const NuevoCliente = () => {
    return (
        <>
            <h1 className="titulo-cliente">Nuevo Cliente</h1>
            <p className="mh">Llena los siguientes campos para registrar un cliente</p>

            <Formulario />
        </>
    )
}
