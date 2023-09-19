import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ShowProduct.css";
import { Link } from 'react-router-dom';
import TablaCabecera from './TablaCabecera'
import TablaCuerpo from './TablaCuerpo';
const endPoint = 'http://localhost:8000/api';

const ShowProduct = () => {
    const [products, setProducts] = useState([]);
    const [confirmacionVisible, setConfirmacionVisible] = useState(false); // Estado para el cuadro de confirmación
    const [productoAEliminar, setProductoAEliminar] = useState(null); // Estado para almacenar el producto a eliminar

    useEffect(() => {
    getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const response = await axios.get(`${endPoint}/products`);
        setProducts(response.data);
    }

    const handleEliminar = (product) => {
        // Mostrar el cuadro de diálogo de confirmación antes de eliminar
        setProductoAEliminar(product);
        setConfirmacionVisible(true);
    };

    const confirmarEliminacion = async () => {
        if (productoAEliminar) {
        await axios.delete(`${endPoint}/product/${productoAEliminar.id}`);
        getAllProducts();
        setConfirmacionVisible(false);
        }
    };
    const NombresCabeceras = ['Descripcion', 'Precio', 'Stock','Fecha','Proveedor','Accion'];
    return (
        <div className='all'>
        <div className='Header'>
            <h1 className='Header__Titulo'>CRUD Laravel + React</h1>
            <Link to="/create" className='Header__Crear'>Crear Producto</Link>
        </div>
        <div className='Contenedor__Tabla'>
            <table className='Tabla'>
            <TablaCabecera cabeceras={NombresCabeceras}/>
            <TablaCuerpo products={products} handleEliminar={handleEliminar}/>
            </table>
        </div>
        {confirmacionVisible && (
            <div className="cuadro-confirmacion">
                <p className='alerta__texto'>¿Estás seguro de que deseas eliminar este producto?</p>
                <div className='alerta__botones'>
                    <button onClick={confirmarEliminacion} className='alerta__boton__aceptar'>Aceptar</button>
                    <button onClick={() => setConfirmacionVisible(false)} className='alerta__boton__cancelar'>Cancelar</button>
                </div>
            </div>
        )}
        </div>
    );
}

export default ShowProduct;
