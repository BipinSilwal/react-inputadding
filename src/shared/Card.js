import React from 'react';

const Card = ({ children, reverse }) => {
  return <div className={reverse ? 'card' : 'carding'}>{children}</div>;
};

export default Card;
