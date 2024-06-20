import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };
  return (
    <div className='product-card-wrap' onClick={showDetail}>
      <img src={item?.img} />
      <div>{item?.choice ? 'Concious choice' : ''}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;
