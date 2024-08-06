import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } from '../component/store/slices/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = () => {
  const items = useSelector((state) => state.cart.cartItems || []);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity || 0);
  const totalPrice = useSelector((state) => state.cart.totalPrice || 0);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {totalQuantity === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <p className="text-center">Total items: {totalQuantity}</p>
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Remove</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="align-middle">
                    <img src={item.thumbnail} alt={item.title} width="100" />
                  </td>
                  <td className="align-middle">{item.title}</td>
                  <td className="align-middle text-center">
                    <div className="quantity-controls">
                      <button
                        className="btn btn-icon"
                        onClick={() => dispatch(decreaseItemQuantity(item.id))}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span className="quantity-text">{item.quantity}</span>
                      <button
                        className="btn btn-icon"
                        onClick={() => dispatch(increaseItemQuantity(item.id))}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </td>
                  <td className="align-middle text-center">
                    <button
                      className="btn btn-delete-icon"
                      onClick={() => dispatch(removeItemFromCart(item.id))}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </td>
                  <td className="align-middle">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total border border-secondary-subtle d-flex justify-content-between align-items-center p-3">
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
