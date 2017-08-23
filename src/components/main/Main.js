import React from 'react';
import styled from 'styled-components';

import FaBalanceScale from 'react-icons/lib/fa/balance-scale';
import FaBarChart from 'react-icons/lib/fa/bar-chart';
import FaDollar from 'react-icons/lib/fa/dollar';

import { colors } from '../../utils/constants';

const Wrapper = styled.section`
  width: 80%;
  margin: auto;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  text-align: center;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    padding: 2em;
  }
`;

const Box = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    transform: scale(${17 / 16});
  }
  &:focus {
    transform: scale(${17 / 16});
  }
`;

const Bar = styled.hr`
  @media (max-width: 700px) {
    width: 100%;
    border-bottom: 2px solid ${colors.FONT};
  }
`;

const Main = () =>
  <Wrapper>
    <Box>
      <FaDollar color={`${colors.FONT_DARK}`} size={60} />
      <h2>Increase Saving</h2>
      <p>Personal and Corporate Taxes</p>
      <Bar />
    </Box>
    <Box>
      <FaBalanceScale color={`${colors.FONT_DARK}`} size={60} />
      <h2>Balance Tax</h2>
      <p>Tax Saving Strategies</p>
      <Bar />
    </Box>
    <Box>
      <FaBarChart color={`${colors.FONT_DARK}`} size={60} />
      <h2>Maximize Income</h2>
      <p>Accounting Services</p>
    </Box>
  </Wrapper>;

export default Main;
