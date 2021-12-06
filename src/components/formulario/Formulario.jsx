import { Field, Form, Formik } from 'formik';
import React from 'react';
import "./Formulario.scss"

export const Formulario = () => {

    const handleSubmit = () => {
        
    }
    
    return (
        <div className="contenedor-form">
            <h2 className="titulo-form">Agregar Cliente</h2>

            <Formik 
                initialValues={{
                    nombre: "",
                    empresa: "",
                    email: "",
                    telefono: "",
                    notas: ""
                }}
                onSubmit={ (values) => handleSubmit(values) }
            >
                {() => (
                    <Form className="formulario">
                        <div className="campo">
                            <label htmlFor="nombre">Nombre: </label>
                            <Field 
                                id="nombre"
                                type="text"
                                className="input"
                                placeholder="Nombre del Cliente"
                                name="nombre"
                            />
                        </div>
                        <div className="campo">
                            <label htmlFor="empresa">Empresa: </label>
                            <Field 
                                id="empresa"
                                type="text"
                                className="input"
                                placeholder="Empresa del Cliente"
                                name="empresa"
                            />
                        </div>
                        <div className="campo">
                            <label htmlFor="email">Email del cliente: </label>
                            <Field 
                                id="email"
                                type="email"
                                className="input"
                                placeholder="Email del Cliente"
                                name="email"
                            />
                        </div>
                        <div className="campo">
                            <label htmlFor="telefono">Teléfono: </label>
                            <Field 
                                id="telefono"
                                type="number"
                                className="input"
                                placeholder="Telefono del Cliente"
                                name="telefono"
                            />
                        </div>
                        <div className="campo">
                            <label htmlFor="notas">Notas: </label>
                            <Field 
                                as="textarea"
                                id="notas"
                                type="text"
                                className="input textarea"
                                placeholder="Notas del Cliente"
                                name="notas"
                            />
                        </div>
                        <input 
                            className="btn--form"
                            type="submit"
                            value="Agregar Cliente"
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
}
