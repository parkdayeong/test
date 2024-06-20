// productAll.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  // 쿼리값 가져오기
  const [query, setQuery] = useSearchParams();

  // API 호출
  const getProducts = async () => {
    let searchQuery = query.get('q') || ''; // 없으면 빈값
    console.log('쿼리값은?', searchQuery);
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  // api호출은 useEffect에서
  // query가 바뀔때마다 호출
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      {/* Container : 아이템을 가운데 둘 수 있게 해준다 */}
      <Container>
        <Row>
          {productList?.map((menu, index) => (
            <Col lg={3} key={index}>
              {' '}
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
