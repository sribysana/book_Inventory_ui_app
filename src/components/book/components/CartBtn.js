import React, { PropTypes } from 'react';

export default function CartBtn(props) {
  const addToCart = () => props.addToCart(props.bookId);
  const removeFromCart = () => props.removeFromCart(props.bookId);


  let cartBtn;
  if (props.isAddToCartBtn) {
    cartBtn = <button type="button" className="btn btn-primary" onClick={removeFromCart}> Remove From Cart</button>;
  } else {
    cartBtn = <button type="button" className="btn btn-primary" onClick={addToCart}> Add To Cart</button>;

  }
  return (
    <div>
      {props.isAddToCartBtn}
      {cartBtn}
      <br />
      <br />
      <button type="button" className="btn btn-primary"> Buy Now</button>
    </div>
  );
}

CartBtn.propTypes = {
  isAddToCartBtn: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  bookId:PropTypes.string.isRequired,
};
