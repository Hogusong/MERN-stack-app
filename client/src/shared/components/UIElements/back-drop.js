import React from 'react';
import ReactDOM from 'react-dom';

const BackDrop = props => {
  const markup = <div className="backdrop" onClick={props.onClick}></div>;
  return ReactDOM.createPortal(markup, document.getElementById('backdrop-hook'));
}

export default BackDrop;