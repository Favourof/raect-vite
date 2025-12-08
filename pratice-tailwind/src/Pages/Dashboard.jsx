// import React, { useContext } from "react";
import { useContext, useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { CartContext, UserContext } from "../context/context";
import Profile from "./Profile";


const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { cart, addToCart, RemoveFromCart } = useContext(CartContext)
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  console.log(cart);

  useEffect(() => {
    let cancelled = false
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error('failed to load Product')
        const json = await res.json()

        if (!cancelled) {
          setProduct(json)
          console.log(json);
        }
        setLoading(false)
        console.log(product);


      } catch (error) {
        setError(error)
        console.log(error);

      }
    }
    fetchProduct()
    return () => {
      cancelled = true
    }
  }, [])







  return (
    <div>

      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        {user ? (
          <p>Hello, {user.name}! This is your dashboard.</p>
        ) : (
          <p>Please log in to see your dashboard.</p>
        )}

        {loading && <p>loadind product.....</p>}
        {error && <p>error loading product</p>}

        {/* { */}
        {/* // product && */}
        <div className="grid gap-4 grid-cols-3">
          {
            product?.map((prod) => (
              <div key={prod.id} className="border-2 p-4">
                <h2>{prod.title}</h2>
                <img className="w-20" src={prod.image} alt={prod.title} />
                <p>{prod.description.slice(0, 100)}</p>
                <button className="border-1" onClick={() => RemoveFromCart(prod.id)}>-</button> < button className="border-1" onClick={() => addToCart(prod)}>+</button>
              </div>

            ))
          }
        </div>

        {/* } */}



      </div>
    </div>
  );
};

export default Dashboard;
