import React from 'react';
import styled from 'styled-components';

import FaPageLines from 'react-icons/lib/fa/pagelines';

import background from './background.jpeg';
import { colors } from '../../utils/constants';

const Wrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  min-height: 400px;
  font-size: 1.5em;
  padding-top: 7em;
  margin-bottom: 3em;
  color: ${colors.FONT_DARK};

  @media (min-width: 800px) {
    font-size: 2em;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 80%;
  overflow: hidden;
  @media (min-width: 700px) {
    align-items: flex-end;
  }
`;

const Banner = () =>
  <Wrapper>
    <Section>
      <h1>Ann S. Xie Professional Corporation</h1>
      <p>
        <span>
          <FaPageLines color={`${colors.GREEN}`} size={60} />
        </span>Chartered Professional Accountant
      </p>
    </Section>
  </Wrapper>;

export default Banner;
