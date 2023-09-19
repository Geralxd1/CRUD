import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./CreateProduct.css"
import InputsForm from './InputsForm'

const endPoint = 'http://localhost:8000/api/product/'
const EditProduct = () => {
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState(0)
  const [stock, setstock] = useState(0)
  const [fecha, setfecha] = useState('')
  const [proveedor,setproveedor] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${endPoint}${id}`, {
      descripcion: descripcion,
      precio: precio,
      stock: stock,
      fecha: fecha,
      proveedor:proveedor
    })
    navigate('/')
  }

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`${endPoint}${id}`)
      setDescripcion(response.data.descripcion)
      setPrecio(response.data.precio)
      setstock(response.data.stock)
      setfecha(response.data.fecha)
      setproveedor(response.data.proveedor)
    }
    getProductById()
  }, [])

  return (
    <div className='principal'>
      <div className='ventana'>
        <div className='ventana__header'>
          <h3 className='header__texto'>Editar Producto</h3>
        </div>
        <div className='ventana__cuerpo'>
          <form onSubmit={update} className='form'>
            <InputsForm
              titulo="Descripcion:"
              descripcion={descripcion}
              set={(e) => setDescripcion(e.target.value)}
              type='text'
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
              <button type='submit' className='boton__agregar'>Guardar</button>
              <Link to="/" className='boton__regresar'>Cancelar</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProduct