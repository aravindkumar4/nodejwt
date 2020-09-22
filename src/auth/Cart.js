import React from 'react';

export default function Cart({ setCart, cart }) {
  const getTotalItem = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };
  const clearCart = () => {
    //console.log('clear');
    setCart([]);
  };
  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    debugger;
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };
  const removeFromCart = (productToRemove) => {
    //console.log('triger');
    setCart(cart.filter((product) => product !== productToRemove));
    //to do something
  };
  return (
    <>
      <h1>Cart</h1>

      {cart.length > 0 && <button onClick={clearCart}>Clear cart</button>}

      <div className='products'>
        {cart.map((product, idx) => (
          <div className='product' key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <input
              value={product.quantity}
              onChange={(e) => setQuantity(product, parseInt(e.target.value))}
            />
            <img src={product.img} alt={product.name}></img>
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
      <div>Total cost: INR{getTotalItem()}</div>
    </>
  );
}
