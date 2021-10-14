import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: 'p1',
    price: 6,
    title: 'First book',
    description: 'This is a first product - amazing!'
  },
  {
    id: 'p2',
    price: 6,
    title: 'Second book',
    description: 'This is a second product - amazing!'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product =>
          <ProductItem
            key={product.id}
            title={product.title}
            id={product.id}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
