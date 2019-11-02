import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  text-align: center;
  color: #4c4c4c;
`;

const Heading = (props) => {
  const { children } = props;
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
