import React from 'react';
import styled from 'styled-components';

import { gradient } from '../bar/styles';

import { colors } from '../../utils/constants';

const Container = styled.footer`
  margin-top: 1em;
  bottom: 0;
  border-top: 2px solid ${colors.FONT};
  min-height: 30px;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  line-height: 1em;
  letter-spacing: 0.05em;
`;

const MailTo = styled.a`
  text-decoration: none;
  color: ${colors.FONT};
  margin-left: 0.5em;
  padding: 0.5em;
  border-radius: 6px;
  &:hover {
    background-image: ${gradient(120, 'magenta', 'yellow')};
    transform: scale(${17 / 16});
  }
  &:focus {
    background-image: ${gradient(120, 'magenta', 'yellow')};
    transform: scale(${17 / 16});
    outline: none;
  }
  &:active {
    transform: scale(${15 / 16});
  }
`;
const Footer = () =>
  <Container>
    <Wrapper>
      <h4>©Copyright 2017 Ann S. Xie Professional Corporation</h4>
      <p>
        Design & Program By:
        <MailTo href="mailto:huijieyep@shaw.ca">Hui Jie Zi-Yep</MailTo>
      </p>
    </Wrapper>
  </Container>;

export default Footer;
