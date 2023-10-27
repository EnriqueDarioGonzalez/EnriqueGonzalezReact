import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const[user, setUser]= useState({})
    const[validateEmail, setValidateEmail]= useState('')
    const[orderId, setOrderId]= useState('')
    const {cart, totalPay, clear} = useContext(CartContext)
    const datosComprador = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name && !user.phone){

            swal('completame los campos')
            
            }else if(!cart.length){
            
            swal('Su carrito esta vacio')
            
        }else{
            let order = {
                user,
                item:cart,
                total:totalPay(),
                date:serverTimestamp()
            }
            const ventas = collection(db, 'orders')
            addDoc(ventas,order)
            .then((res)=>{
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }
  return (
    <div>
        {orderId !== ''
        ?<div>
            <h2>Felicitaciones, tu orden se ha realizado con éxito!</h2>
            <h5>Su numero de seguimiento es: {orderId}</h5>
            <Link className='btn btn-dark' to='/'>Volver a navegación</Link>
        </div>
        : <div>
        <h2>Terminar mi Compra</h2>
        <h5>Por favor rellene el formulario</h5>
        <form onSubmit={finalizarCompra}>
            <div className='mb-3'>
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input className='form-control' onChange={datosComprador} type='text' placeholder='Nombre' name='name' required/>
            </div>
            <div className='mb-3'>
                <label htmlFor="lastname" className="form-label">Apellido</label>
                <input className='form-control' onChange={datosComprador} type='text' placeholder='Apellido' name='lastname' required/>
            </div>
            <div className='mb-3'>
                <label htmlFor="phone" className="form-label">Numero de Telefono</label>
                <input className='form-control' onChange={datosComprador} type='number' placeholder='+549333333333' name='phone' required/>
            </div>
            <div className='mb-3'>
                <label htmlFor="correo" className="form-label">E-mail</label>
                <input className='form-control' onChange={datosComprador} type='email' placeholder='nombre@email.com' name='mail' required/>
            </div>
            <div className='mb-3'>
                <label htmlFor="correo" className="form-label">Confirme E-mail</label>
                <input className='form-control' type='email' placeholder='nombre@email.com' name='mail' onChange={((e)=>setValidateEmail(e.target.value))}/>
            </div>
            <button className='btn btn-dark' type='submit' disabled={validateEmail !== user.mail && !cart.length}>Generar Compra</button>
        </form>
    </div>}
    </div>
  )
}

export default Checkout