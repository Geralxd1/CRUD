import React from 'react'

const TablaCabecera = (props) =>{
    // Destructura el array de props
    const { cabeceras } = props;

    // Mapea los elementos para crear botones
    const cabeceras_ = cabeceras.map((cabecera, index) => (
        <th key={index} className='Tabla__Cabecera__celda'>{cabecera}</th>
    ));
    return (
        <thead className='Tabla__Cabecera'>
            {cabeceras_}
        </thead>
    )
}

export default TablaCabecera