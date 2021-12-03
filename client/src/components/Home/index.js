import React from "react";
import "./styles/home.css";

import APOD from '../PictureCards/APOD'
import Container from "react-bootstrap/esm/Container";


const Home = () => {
  return (
<main className="home-container">
    <Container className="p-3">
      <APOD />
    </Container>
</main>
  );
};

export default Home;