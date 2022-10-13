import { useState, useEffect } from "react";
import styles from "./Styles/ItemCount.module.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const ingrease = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className={styles.counter}>
      <div className={styles.counter__buttons}>
        <button disabled={count <= 1} onClick={decrease}>
          <i class="fa-solid fa-minus"></i>
        </button>
        <span className={styles.count}>{count}</span>
        <button disabled={count >= stock} onClick={ingrease}>
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div>
        <button
          className={styles.addCart}
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
