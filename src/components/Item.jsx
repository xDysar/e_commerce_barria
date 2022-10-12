import styles from './Styles/Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ info }) => {
  const { id, image, title } = info;
  
  return (
    <Link to={`/detalle/${id}`} className={styles.film}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </Link>
  );
}
export default Item