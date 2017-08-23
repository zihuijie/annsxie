import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors } from '../../utils/constants';
import Logo from './Logo';

const Wrapper = styled.div`
  min-height: 70px;
  width: 80%;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5em .5em;

  @media (min-width: 700px) {
    flex-direction: row;
    padding: 1em .5em;
    margin-left: 4em;
    margin-right: 4em;
  }
`;

const Link = styled(NavLink)`
  display: inline-block;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: ${colors.FONT};
  text-decoration: none;
  padding: 0.3em 1em;

  &:hover {
 background: ${colors.LIGHT_GREY};
   
  };
  &:focus {
 background: ${colors.FONT};
    color: ${colors.WHITE};
  };
  &:active {
    background: ${colors.FONT};
    color: ${colors.WHITE};
  };

    font-size: 0.9em;
    @media (min-width: 700px) {
    font-size: 1.5em;
  }

`;

const Container = styled.nav`
  display: flex;
  margin-left: 2rem;
  border-bottom: 2px solid ${colors.FONT};
`;

const Nav = () =>
  <Container>
    <Link to="/" exact activeClassName="active">
      Home
    </Link>
    <Link to="/services" activeClassName="active">
      Services
    </Link>
    <Link to="/contact" activeClassName="active">
      Contact
    </Link>
  </Container>;

const PrimaryHeader = () =>
  <header>
    <Wrapper>
      <Logo />
      <Nav />
    </Wrapper>
  </header>;

export default PrimaryHeader;
