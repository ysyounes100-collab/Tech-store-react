import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search ,setSearch] = useState("");

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  
    if(products.length === 0)
      return <p>Loading...</p>

    const filteredProducts = products.filter ((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
    );


  return (
  <div>
    <div className="search-div">
      <Search search={search} setSearch={setSearch}/> 
    </div>  
    <div className="products">
      {filteredProducts.map((product) =>
      <ProductCard key={product.id} product={product}/>
      )}
      {filteredProducts.length === 0 && (<h1 id="aaa">Pas de produits trouvés !</h1 >)}

    </div>

  </div>
  );
}
































// .then(data => setProducts(data));
// (data.filter(p => p.category === "electronics")))