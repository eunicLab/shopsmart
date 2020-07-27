import React from 'react';
import '../App.css';
import { FiCheck } from 'react-icons/fi';

let MyCheck = (props) => {
  if (props.toggleCheckBox === false) {
    return (
      <span className='checkbox1' onClick={props.handleCheckboxTrue}>
        {'   '}
      </span>
    );
  } else
    return (
      <FiCheck
        onClick={props.handleCheckboxFalse}
        name='check'
        className='checkbox2'
        color='rgb(19, 153, 15)'
      />
    );
};

export default MyCheck;
