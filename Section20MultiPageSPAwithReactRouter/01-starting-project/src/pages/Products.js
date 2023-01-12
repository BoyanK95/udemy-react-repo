import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li><Link to='/products/BCAA'>BCAA</Link></li>
        <li><Link to='/products/Whey-Protein'>Whey Protein</Link></li>
        <li><Link to='/products/Pre-workout'>Pre-workout</Link></li>
      </ul>
    </section>
  );
};

export default Products;
