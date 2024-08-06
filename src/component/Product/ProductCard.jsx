import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isAdded, setIsAdded] = useState(
    cartItems ? cartItems.some((item) => item.id === product.id) : false
  );

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
    setIsAdded(true);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(product.id));
    setIsAdded(false);
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const inStock = product.stock > 0;
  const stockText = inStock ? 'In stock' : 'Out of stock';
  const stockClass = inStock ? 'text-success' : 'text-danger';

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-warning" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStarEmpty} className="text-warning" />
        ))}
      </>
    );
  };

  return (
    <Card className="product-card">
      <Link to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{truncateDescription(product.description, 15)}</Card.Text>
        <Card.Text>
          <span className={stockClass}>{stockText}</span>
        </Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Card.Text>Rating: {renderRating(product.rating)}</Card.Text>
        <Button
          variant={isAdded ? "outline-success" : "outline-primary"}
          className="btn-custom"
          onClick={isAdded ? handleRemoveFromCart : handleAddToCart}
        >
          {isAdded ? 'Remove from Cart' : 'Add to Cart'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
