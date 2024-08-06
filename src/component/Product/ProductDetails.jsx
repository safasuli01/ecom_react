
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addItemToCart } from '../../component/store/slices/cartSlice'; // Adjust the path as necessary
import './ProductDetails.css';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const addToCartHandler = () => {
    dispatch(addItemToCart(product));
    if (window.confirm('Product added to cart! Do you want to go to the cart?')) {
      navigate('/cart');
    }
  };

  return (
    <div className="product-container container mt-5">
      {product ? (
        <div className="row">
          <div className="col-md-6 mt-5">
            <img
              src={product.thumbnail}
              className="img-fluid main-image border-dark border-2 ps-5"
              alt={product.title}
            />
            <div className="row mt-2">
              {product.images.map((image, index) => (
                <div className="col-3" key={index}>
                  <img
                    src={image}
                    className="img-fluid additional-image shadow"
                    alt={`${product.title} ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-brand">Brand: {product.brand}</p>
            <div className="rating pb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <i
                  key={i}
                  className={`fa-star ${i < Math.floor(product.rating) ? 'fas' : 'far'} text-warning`}
                ></i>
              ))}
            </div>
            <p className="product-description">{product.description}</p>
            {product.discountPercentage ? (
              <p className="product-price">
                <span className="text-muted text-decoration-line-through">
                  ${product.price}
                </span>
                <span className="text-danger fw-bold">
                  ${(
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}{' '}
                  ({product.discountPercentage}% off)
                </span>
              </p>
            ) : (
              <p className="product-price">${product.price}</p>
            )}
            <div className="quantity mt-3">
              <label htmlFor="quantity" className="me-2">Quantity:</label>
              <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" className="me-3"/>
              <button className="btn btn-outline-dark" onClick={addToCartHandler}>
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="error">Product not found</div>
      )}
    </div>
  );
};

export default SingleProduct;
