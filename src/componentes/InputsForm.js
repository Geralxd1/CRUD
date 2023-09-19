import React, { useState, useEffect } from 'react'
import './CreateProduct.css'

function InputsForm(props) {

    return (
        <div className='ventana__cuerpo__ingresos'>
            <label className='input__nombre'>{props.titulo}</label>
            <input
                value={props.descripcion}
                onChange={props.set}
                type={props.type}
                required
                className={`input__campo`}
                placeholder={props.placeholder}
                min={props.type === 'number' ? 1 : undefined}
            />
        </div>
    )
}

export default InputsForm