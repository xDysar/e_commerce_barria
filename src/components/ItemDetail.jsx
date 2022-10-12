import { useState } from 'react';
import {useCartContext} from '../context/CartContext'
import {Link} from 'react-router-dom'
import styles from './Styles/ItemDetail.module.css'
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(data, quantity)
  };


  return (
    <div className='container'>
      <div className={styles.detail}>
        <img className={styles.detail__image} src={data.image} alt={data.title} />
        <div className={styles.content}>
          <h2>{data.title}</h2>
          {
            goToCart 
              ?<Link to={'/carrito'}>Terminar compra</Link>
              :<ItemCount initial={1} stock={5} onAdd={onAdd} />
          }
        </div>
      </div>
    </div>
  )
}
export default ItemDetail