import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <section>
      <h1>Products:</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
