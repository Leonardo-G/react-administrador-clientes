import { Field, Form, Formik } from 'formik';
import React from 'react';
import "./Formulario.scss"

export const Formulario = () => {
    
    return (
        <div className="contenedor-form">
            <h2 className="titulo-form">Agregar Cliente</h2>

            <Formik>
                <Form className="formulario">
                    <div>
                        <label htmlFor="nombre">Nombre: </label>
                        <Field 
                            id="nombre"
                            type="text"
                            className="campo"
                            placeholder="Nombre del Cliente"
                        />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
