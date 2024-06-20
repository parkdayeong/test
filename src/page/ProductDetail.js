import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  // console.log(id);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img}></img>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice ? 'Concious choice' : ''}</div>
          <select>
            {product?.size.map((item) => {
              return <option> {item}</option>;
            })}
          </select>
          <button>추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
