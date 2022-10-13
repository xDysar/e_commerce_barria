import { useCartContext } from '../context/CartContext';
import styles from './Styles/ItemCart.module.css'

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className={styles.ItemCart}>
      <img className={styles.buy__img} src={product.image} alt={product.title} />
      <div>
        <p className={styles.buy__text}>Titulo: {product.title}</p>
        <p className={styles.buy__text}>Cantidad: {product.quantity}</p>
        <p className={styles.buy__text}>Precio u.: {product.price}</p>
        <p className={styles.buy__text}>Subtotal: ${product.quantity * product.price}</p>
        <button
          className={styles.buy__btn}
          onClick={() => removeProduct(product.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
export default ItemCart