import React, { useContext } from "react";
import "./styles/home.css";

import APOD from '../PictureCards/APOD'
import Container from "react-bootstrap/esm/Container";
import TopPics from "./TopPics";
import { UserID } from "../../App";


const Home = () => {
  const { userID } = useContext(UserID)
  return (
<main style={{backgroundColor:"black"}}>
    <Container>
      <div className="mb-3">
        <TopPics />
      </div>
      <div className="mb-3">
        <APOD />
      </div>
    </Container>
</main>
  );
};

export default Home;