import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    padding: 2em;
  }
`;

const ContentWrapper = ({ children }) =>
  <Wrapper>
    {children}
  </Wrapper>;

ContentWrapper.propTypes = {
  children: PropTypes.element,
};

export default ContentWrapper;
