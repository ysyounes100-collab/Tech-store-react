import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

export default function Cart() {
  const { cartItems, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();
    
  return (

    <div className="cart">
      <h2>Your Cart :</h2>
      {cartItems.length === 0 && (<p id="vide">Le panier est vide !</p>)}

      {cartItems.map(item => (
        <div key={item.id}>
          <img id ="cart-image" src={item.image}/>{item.title} x {item.quantity} —— ${item.price}
          <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h3 id="total">Total: ${totalPrice.toFixed(2)}</h3>
    </div>
    
  );
}

