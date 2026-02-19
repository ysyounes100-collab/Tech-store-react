import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "/public/logo.png"


export default function Navbar() {
  const total = useSelector(state => state.cart.totalQuantity);
  const cartItems = useSelector(state => state.cart.items);


  return (
    <div className="navbar">
    <nav>
      <Link to ="/"><img src={logo} className="logo"/></Link>
    </nav>
    <nav className="nav">
      
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({total})</Link>
      
    </nav>
    
    </div>
  );
}
