import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const items = useSelector(state => state.cart.items);
  console.log(items);

  const cartItems = () => {
    return (
      items.map(item =>
        <CartItem
          item={{ title: item.title, quantity: item.quantity, total: item.total, price: item.price }}
        />
      )
    );
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems()}
      </ul>
    </Card>
  );
};

export default Cart;
