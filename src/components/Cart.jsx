import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import ItemCart from "./ItemCart"

const Cart = () => {
  const { cart, totalPrice } = useCartContext()

  const order = {
    buyer: {
      name: 'Lucas',
      email: 'correo@correo.com',
      phone: '123321',
      address: 'San Justo 99'
    },
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleBuy = () => { 
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))
  }

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to={'/'}>Hacer compras</Link>
      </>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        total: {totalPrice()}
      </p>
      <button onClick={handleBuy}>Emitir compra</button>
    </>
  )
}
export default Cart