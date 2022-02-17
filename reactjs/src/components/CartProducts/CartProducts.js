import classes from '../CartProducts/CartProducts.module.css';

const CartProducts = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-products']} key={props.key}>
      <div>
        <h2>{props.title}</h2>
        <div className={classes.products}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartProducts;