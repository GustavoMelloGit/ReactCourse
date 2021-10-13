import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const cartVisibility = useSelector(state => state.ui.cartOpen);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch('https://reacthttp-82415-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    }).then(response => {
      console.log(response.ok);
    });
  }, [cart]);

  return (
    <Layout>
      {cartVisibility &&
        <Cart />
      }
      <Products />
    </Layout>
  );
}

export default App;
