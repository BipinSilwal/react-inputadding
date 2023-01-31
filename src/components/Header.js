import React from 'react';

const Header = ({ text, bgColor, textColor }) => {
  const world = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <>
      <div className="containers" style={world}>
        <h2>{text}</h2>
      </div>
    </>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

export default Header;
