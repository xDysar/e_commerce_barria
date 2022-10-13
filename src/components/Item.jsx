import styles from "./Styles/Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  const { id, image, title } = info;

  return (
    <>
      <div className={styles.item}>
          <img src={image} alt={title} />
          <p>{title}</p>
          <Link to={`/detalle/${id}`} className={styles.item__btn}>Ver detalle</Link>
      </div>
    </>
  );
};
export default Item;
