import React from 'react';
import '../Header/styles/header.css';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

const styles = {
  headerStyle: {
    background: 'black',
  },
  headingStyle: {
    fontSize: '40px',
  },
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
    <Link className="text-dark" to="/">
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
  </Link>
    </header>
  );
}

export default Header;