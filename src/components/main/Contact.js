import React from 'react';
import styled from 'styled-components';

import FaUser from 'react-icons/lib/fa/user';
import FaRoad from 'react-icons/lib/fa/road';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaPhone from 'react-icons/lib/fa/phone';
import FaFax from 'react-icons/lib/fa/fax';
import FaWechat from 'react-icons/lib/fa/wechat';


import { colors, contactinfo } from '../../utils/constants';

import ContactForm from './ContactForm';

const Wrapper = styled.section`
width: 80%;
margin: auto;
  align-items: top;
  display: grid;
  grid-template-columns: 1fr;
text-align: left; 
padding: 2em;
color: ${colors.FONT_DARK};
box-shadow: 0 0 20px 0 ${colors.FONT_DARK};
font-family: 'Source Sans Pro', sans-serif;
 @media (min-width: 950px) {
    grid-template-columns: 1fr 2fr;         
  };
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
  h1 {
    text-transform: uppercase;
    letter-spacing: 0.35em;
  }
  font-family: 'Source Sans Pro', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  line-height: 0.8em;
  margin-top: 2em;
  margin-bottom: 2em;
  font-family: 'Source Sans Pro', sans-serif;
`;

const List = styled.ul`
    text-align: center;
  list-style: none;
  padding: 0;
  letter-spacing: 0.35em;
  span {
    margin-left: 0.8em;
  };
  li {
    margin-bottom: 0.8em;
  };
  .icon {
    display: inline-block;
    width: 2em;
    height: 2em;
    color: inherit;
  };
  .title {
    font-size: 1.3em;
    font-weight: bold;
    font-family:'Source Sans Pro','serif';

  }
`;

class Contact extends React.Component {
  submit = values => {
    
  };

  render() {
    return (
      <div>
        <Header>
          <h1> Ann S. Xie Professional Corporation</h1>
          <p>Chartered Professional Accountant</p>
        
        </Header>
        <Wrapper>
          <Box>
          <h1>Contact Details</h1>
            <List>
            <li> 
            <FaUser color={`${colors.FONT_DARK}`} className="icon" />
            <span className="title">{contactinfo.name} {contactinfo.jobTitle}</span>
            </li>
              <li>
                <FaRoad color={`${colors.FONT_DARK}`} className="icon" />
                <span>
                  {contactinfo.address}
                </span>
              </li>
              <li>
                <FaEnvelopeO color={`${colors.FONT_DARK}`} className="icon" />
                <span>
                  {contactinfo.email}
                </span>
              </li>
              <li>
                <FaPhone color={`${colors.FONT_DARK}`} className="icon" />
                <span>
                  {contactinfo.phone}
                </span>
              </li>
              <li>
                <FaFax color={`${colors.FONT_DARK}`} className="icon" />
                <span>
                  {contactinfo.fax}
                </span>
              </li>
              <li>
                <FaWechat color={`${colors.FONT_DARK}`} className="icon" />
                <span>
                  {contactinfo.wechat}
                </span>
              </li>
            </List>
          </Box>
          <Box>
            <h1>Get In Touch</h1>
            <ContactForm onSubmit={this.submit} />
          </Box>
        </Wrapper>
      </div>
    );
  }
}

export default Contact;
