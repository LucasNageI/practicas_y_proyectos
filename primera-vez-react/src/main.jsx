import React from 'react'
import ReactDOM from 'react-dom/client'
import { Clientes } from './Clientes/Clientes.jsx'
import { Productos } from './Productos/Productos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <h2 className='clientes-title'>Clientes</h2>

            <div>
            <Clientes />
            <hr />
            <Clientes />
            <hr />
            <Clientes />
            <hr />
            </div>

        <h2 className='productos-title'>Productos</h2>

            <div>
                <Productos />
                <hr />
                <Productos />
                <hr />
                <Productos />
                <hr />
                <Productos />
                <hr />
            </div>
    </>
)
