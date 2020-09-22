import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './Cart';
import Products from './products';
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const Home = (props) => {
  const [json, Setjson] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:7777/api/getAll', {
        headers: { auth: `${JSON.parse(localStorage.getItem('auth'))}` },
      })
      .then((res) => {
        Setjson(res.data);
        // props.history.push('/home');
      })
      .catch((err) => {});
  }, []);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <div>
      {/* <p>{JSON.stringify(json)}</p> */}
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to cart({getCartTotal()})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>view Products</button>
      </header>
      {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
      {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}

      <button
        onClick={() => {
          localStorage.clear();
          props.history.push('/login');
        }}
        className='btn btn-primary'
      >
        Logout
      </button>
    </div>
  );
};
export default Home;
