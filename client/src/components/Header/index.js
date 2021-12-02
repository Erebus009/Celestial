import React from 'react';
import '../Header/styles/header.css';
import Typical from 'react-typical'

const styles = {
  headerStyle: {
    background: 'gray',
  },
  headingStyle: {
    fontSize: '40px',
  },
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
    <h1>
      <Typical 
      loop={Infinity}
      steps={[
          "Most interesting space in the World!",
          1000,
          "",
          1000,
          "",
          1000,
          "",
          1000,
      ]}
      /> 
  </h1>

    </header>
  );
}

export default Header;