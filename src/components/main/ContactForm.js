import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/constants';
import { Field, reduxForm } from 'redux-form';

const Form = styled.form`
 letter-spacing: 0.35em;
  width: 100%;
  .firstname,
  .lastname, 
  .email,
  .textarea {    
     letter-spacing: 0.35em;
    position: relative;
    float: left;
    vertical-align: top;
     width: 100%;
       background: none;
       outline: none;
    height: 2em;
    border: none;
       border-bottom: 1px solid ${colors.FONT}; 
    &:hover {
  background-color: ${colors.LIGHT_GREEN};
    color: ${colors.FONT_DARK};     
    };
    &:focus {
  background-color: ${colors.LIGHT_GREEN};
    color: ${colors.FONT_DARK};     
    };
  };
  .textarea {
    min-height: 4em;
  };

  &:last-child {
    margin-bottom: 0;
  };
  .label {
    display: block;
    font-size: 0.9em;
    font-weight: 900;
    margin: 1em 0 1em 0;
    text-align: base-line;
  };
  .button {
    float: right;    
  };
  input:focus {
    outline: 0;
  }
  
`;

const Button = styled.button`
margin: 1em 1em 0 ;
    color: ${colors.FONT_DARK};
    height: 3.5em;
    padding: 0.5em;
    border-radius: 4px;
    border: 0;
    font-size: 0.8em;
    letter-spacing: 0.35em;
    text-align: center;
    text-transform:uppercase;
    cursor: pointer;
    &:hover {
      background-color: ${colors.LIGHT_GREEN};
      mouse: pointer;
    };
    &:focus {
      background-color: ${colors.LIGHT_GREEN};
      mouse: pointer;
    }
 
`;

const ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      
      <div className="name">
      <div>
        <label className="label">First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            className="firstname"
          />
        </div>
      </div>
      <div>
        <label className="label">Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            className="lastname"
          />
        </div>
      </div>
      </div>
      <div>
        <label className="label">Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            className="email"
          />
        </div>
      </div>
      <div>
        <label className="label">Notes</label>
        <div>
          <Field name="message" component="textarea" className="textarea" placeholder="Message"/>
        </div>
      </div>
      <div className="button">
        <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: 'contact',
})(ContactForm);
