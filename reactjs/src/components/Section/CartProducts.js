import classes from '../css/CartItem.css';

//add btn to remove and add products
const CartProducts = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-products']} key={props.key}>
      <div>
        <h2>{props.name}</h2>
        <div>
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