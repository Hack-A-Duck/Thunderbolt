import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
// import './css-files/cart.css';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    
    <div classNameName="row top">
      {/* <div className="basket">
      <div className="basket-title">
        Cart Items
      </div>
      <div className="basket-labels">
        <ul>
          <li className="item item-heading">Item</li>
          <li className="price">Price</li>
          <li className="quantity">Quantity</li>
          <li className="subtotal">Subtotal</li>
        </ul>
      </div>
      <div className="basket-product">
        <div className="item">
          <div className="product-image">
            <img src="http://placehold.it/120x166" alt="Placholder Image 2" className="product-frame"/>
          </div>
          <div className="product-details">
            <h1><strong><span className="item-quantity">4</span> x Eliza J</strong> Lace Sleeve Cuff Dress</h1>
            <p><strong>Navy, Size 18</strong></p>
            <p>Product Code - 232321939</p>
          </div>
        </div>
        <div className="price">26.00</div>
        <div className="quantity">
          <input type="number" value="4" min="1" className="quantity-field"/>
        </div>
        <div className="subtotal">104.00</div>
        <div className="remove">
          <button>Remove</button>
        </div>
      </div>
      <div className="basket-product">
        <div className="item">
          <div className="product-image">
            <img src="http://placehold.it/120x166" alt="Placholder Image 2" className="product-frame"/>
          </div>
          <div className="product-details">
            <h1><strong><span className="item-quantity">1</span> x Whistles</strong> Amella Lace Midi Dress</h1>
            <p><strong>Navy, Size 10</strong></p>
            <p>Product Code - 232321939</p>
          </div>
        </div>
        <div className="price">26.00</div>
        <div className="quantity">
          <input type="number" value="1" min="1" className="quantity-field"/>
        </div>
        <div className="subtotal">26.00</div>
        <div className="remove">
          <button>Remove</button>
        </div>
      </div>
    </div>
    <aside>
      <div className="summary">
        <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
        <div className="summary-subtotal">
          <div className="subtotal-title">Subtotal</div>
          <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
          <div className="summary-promo hide">
            <div className="promo-title">Promotion</div>
            <div className="promo-value final-value" id="basket-promo"></div>
          </div>
        </div>
        <div className="summary-delivery">
          <select name="delivery-collection" className="summary-delivery-selection">
              <option value="0" selected="selected">Select Collection or Delivery</option>
             <option value="collection">Collection</option>
             <option value="first-className">Royal Mail 1st className</option>
             <option value="second-className">Royal Mail 2nd className</option>
             <option value="signed-for">Royal Mail Special Delivery</option>
          </select>
        </div>
        <div className="summary-total">
          <div className="total-title">Total</div>
          <div className="total-value final-value" id="basket-total">130.00</div>
        </div>
        <div className="summary-checkout">
          <button className="checkout-cta">Go to Secure Checkout</button>
        </div>
      </div>
    </aside> */}


      <div classNameName="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div classNameName="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      classNameName="small"
                    ></img>
                  </div>
                  <div classNameName="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>₹{item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div classNameName="col-1">
        <div classNameName="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : ₹
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                classNameName="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
}