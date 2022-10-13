import React from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/Products.module.css";

const Products = () => {
  return (
    <div className="container">
      <div className={styles.products}>
        <ul>
          <li>
            <Link className={styles.products__link} to={"/categoria/cocina"}>Cocina</Link>
          </li>
          <li>
            <Link className={styles.products__link} to={"/categoria/instrumento"}>Instrumento</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
