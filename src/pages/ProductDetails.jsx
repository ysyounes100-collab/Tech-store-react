import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/products.json?timestamp=" + new Date().getTime())
      .then(res => res.json())
      .then(data => {
      const found = data.find(p => p.id === Number(id));
      setProduct(found)});
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="details">
    <div className="card">
      <img src={product.image} />
      <h2>{product.title}</h2>
      <p id='details'>{product.description}</p>
      <strong> <a className="price">${product.price}</a></strong>
      <br />
      <button className="add_to_cart" onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
    </div>
  );
}

