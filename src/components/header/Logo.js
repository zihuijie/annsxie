import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { gradient } from '../bar/styles';
import logo from './annsxie-logo.png';

const Wrapper = styled(Link)`
    display:inline-block;    
    vertical-align: middle;
    background-color: transparent;
    border-radius:6px;
    margin: 0;    
    appearance: none;
    &:hover {
       background-image: ${gradient(120, 'magenta', 'yellow')};
       transform: scale(${17 / 16});
    };
     &:focus {
       background-image: ${gradient(120, 'magenta', 'yellow')};
       transform: scale(${17 / 16});
       outline: none;
    };
    &:active {
        transform: scale(${15 / 16});
    }
   
`;

const Image = styled.img`
  vertical-align: middle;
  display: inline-block;
  outline: 0;
  padding: 0.3em 0.25em 0.3em 0.25em;
  margin-bottom: 1em;
`;

const Logo = () =>
  <Wrapper to="/">
    <Image src={logo} alt="Ann S. Xie Corporation" />
  </Wrapper>;

export default Logo;
