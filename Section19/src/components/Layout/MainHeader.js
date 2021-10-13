import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const handleOpenCart = () => {
    dispatch(cartActions.openCart());
  }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={handleOpenCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
