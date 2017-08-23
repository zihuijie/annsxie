import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

const PageWrapper = ({ children }) =>
  <Container>
    {children}
  </Container>;

PageWrapper.proptypes = {
  children: PropTypes.element,
};

export default PageWrapper;
