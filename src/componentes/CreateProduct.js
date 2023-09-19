import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./CreateProduct.css"
import InputsForm from './InputsForm';
const endPoint = 'http://localhost:8000/api/product'

const CreateProduct = () => {
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState(1)
    const [stock, setstock] = useState(1)
    const [fecha, setfecha] = useState('')
    const[proveedor, setproveedor] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endPoint,
            {
                descripcion: descripcion,
                precio: precio,
                stock: stock,
                fecha: fecha,
                proveedor:proveedor
            })
        navigate('/')
    }
    return (
        <div className='principal'>
            <div className='ventana'>
                <div className='ventana__header'>
                    <h3 className='header__texto'>Crear Producto</h3>
                </div>
                <div className='ventana__cuerpo'>
                    <form onSubmit={store} className='form'>
                        <InputsForm
                            titulo="Descripcion:"
                            descripcion={descripcion}
                            set={(e) => setDescripcion(e.target.value)}
                            type='text'
                            placeholder='Ingrese la descripcion del producto'
                        />
                        <InputsForm
                            titulo="Precio:"
                            descripcion={precio}
                            set={(e) => setPrecio(e.target.value)}
                            type='number'
                        />
                        <InputsForm
                            titulo="Stock:"
                            descripcion={stock}
                            set={(e) => setstock(e.target.value)}
                            type='number'
                        />
                        <InputsForm
                            titulo="Fecha:"
                            descripcion={fecha}
                            set={(e) => setfecha(e.target.value)}
                            type='date'
                        />
                        <InputsForm
                            titulo="Proveedor:"
                            descripcion={proveedor}
                            set={(e) => setproveedor(e.target.value)}
                            type='text'
                        />
                        <div className='ventana__botones'>
                            <button type='submit' className='boton__agregar'>Agregar</button>
                            <Link to="/" className='boton__regresar'>Regresar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct