import React from 'react';
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <div>
      <StyledH1>에러페이지입니다.</StyledH1>
    </div>
  );
};

const StyledH1 = styled.h1`
  color: red;
`;

export default ErrorPage;
