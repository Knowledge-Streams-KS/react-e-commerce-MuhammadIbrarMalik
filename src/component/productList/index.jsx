/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../productCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="ProductList">
      {products.length !== 0 ? (
        products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
          />
        ))
      ) : (
        <p>Loading..........</p>
      )}
    </div>
  );
}

export default ProductList;
