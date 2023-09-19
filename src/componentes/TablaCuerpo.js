import React from 'react';
import { Link } from 'react-router-dom';
const TablaCuerpo = ({ products, handleEliminar }) => {
    return (
        <tbody className='Tabla__Cuerpo'>
        {products.map((product, index) => (
            <tr key={index}>
                {Object.keys(product).map((key, colIndex) => {
                    // Omitir la primera y las dos últimas columnas (asumiendo que hay más de 3 columnas)
                    if (colIndex !== 0 && colIndex < Object.keys(product).length - 2) {
                    return (
                        <td key={key} className='Tabla__Cuerpo__celda'>
                        {product[key]}
                        </td>
                    );
                    } else {
                    return null; // Omitir esta celda
                    }
                })}
                
                <td className='Tabla__Cuerpo__celda celda__botones'>
                        <div className='boton__editar'>
                            <img src='/editar.png' className='boton_icono' />
                            <Link to={`/edit/${product.id}`} className='boton__editar__texto'>Editar</Link>
                        </div>
                        <div className='boton__eliminar'>
                            <img src='/eliminar.png' className='boton_icono' />
                            <button onClick={() => handleEliminar(product)} className='boton__eliminar__texto'>Eliminar</button>
                        </div>
                    </td>
            </tr>
        ))}
        </tbody>
    );
}

export default TablaCuerpo;
