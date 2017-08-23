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
  padding: 1rem;
text-align: left;

  }
 
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background: ${colors.BACKGROUND_GREY};
  border: ${colors.LIGHT_GREY} solid 1px;
`;

const Image = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
`;
const Header = styled.h1`text-align: left;`;
const Service = () =>
  <Wrapper>
    <Header> Services</Header>
    <Box>
      <ul>
        <li>Bookkeeping</li>
        <li>Income Tax return</li>
        <li>Managing Payroll</li>
      </ul>
      <Image src={servicejpg} alt="Service" />
    </Box>
  </Wrapper>;

export default Service;
