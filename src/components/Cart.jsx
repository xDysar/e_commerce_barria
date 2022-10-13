import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import ItemCart from "./ItemCart"
import styles from './Styles/Cart.module.css'

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
      <div className="container">
        <div className={styles.cart__empty}>
          <img src="https://i.postimg.cc/Df6hwJCp/empty-cart.png" alt="" />
          <p>
            No hay productos en el carrito
          </p>
          <Link className={styles.cart__empty__btn} to={"/"}>Ir a los productos</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className={styles.buy__container}>
        <p className={styles.buy__total}>Total: {totalPrice()}</p>
        <button className={styles.buy__btn} onClick={handleBuy}>
          Emitir compra
        </button>
      </div>
    </>
  );
}
export default Cart