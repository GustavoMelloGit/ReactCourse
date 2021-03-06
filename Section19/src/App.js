import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartVisibility = useSelector(state => state.ui.cartOpen);
  const cart = useSelector(state => state.cart);
  const statusBar = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {statusBar && <Notification status={statusBar.status} title={statusBar.title} message={statusBar.message} />}
      <Layout>
        {cartVisibility &&
          <Cart />
        }
        <Products />
      </Layout>
    </>
  );
}

export default App;
