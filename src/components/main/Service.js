import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/constants';
import servicejpg from './service.jpg';


const Wrapper = styled.section`
width: 80%;
margin: auto;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  padding: 2em;
text-align: left;
  }
 
`;

const Box = styled.div`
  postion: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background: ${colors.BACKGROUND_GREY};
  border: ${colors.LIGHT_GREY} solid 1px;

`;

const Image = styled.div`
positon: relative;
z-index:1;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background:url(${servicejpg}) no-repeat;
  background-size:contain;
  background-position: center;
 width: 60%;
  height: 400px;  
 &:hover {
   transform: scale(1.05);
   &:after {
     opacity: 0;
   };
   }
`;
const Header = styled.h1`text-align: left;`;

const Service = () =>
 <div>
  <Wrapper>
    <Header> Services</Header>
    <Box>
      <ul>
        <li>Bookkeeping</li>
        <li>Income Tax return</li>
        <li>Managing Payroll</li>
      </ul>
  
      <Image />

    </Box>
  </Wrapper>
  </div>;

export default Service;
