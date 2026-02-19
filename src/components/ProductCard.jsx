import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stars = Math.floor(product.rating.rate);

  return (
    <div className="card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} />
      <h3>{product.title.slice(0,36)}</h3>

      <div className="rating">
        {[...Array(stars)].map((i) =>(
          <span key={i}>⭐</span>
        ))}
        <span className="rating-number"> ({product.rating.rate})</span>

      </div>
      
      <strong><p className="price">${product.price}</p></strong>
      
      <button className ="add_to_cart" onClick={(e) => {e.stopPropagation()
        dispatch(addToCart(product))}}>
        Add to Cart
      </button>
    </div>
  );
}
