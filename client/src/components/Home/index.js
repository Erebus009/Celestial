import React, { useContext } from "react";
import "./styles/home.css";
import ModalImage from "react-modal-image";

import APOD from '../PictureCards/APOD';
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from './styles/earth.jpeg';
import image2 from './styles/manonmoon.jpeg';
import image3 from './styles/skyspace.jpeg';
import image4 from './styles/satellite.jpeg';
import image5 from './styles/flyingsolo.jpeg';
import image6 from './styles/moon1.jpeg';
import image7 from './styles/milkyway.jpeg';
import image8 from './styles/astronaut1.jpeg';
import image9 from './styles/flightsky.jpg';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';
import AuthService from '../../utils/auth';
import TopPics from "./TopPics";
import { UserID } from "../../App";


const Home = () => {


  const [count, setCount]= useState(40);

  const counter = ()=>{

setCount(count+1);

  }
  const [dislike, setDislike]= useState(40);
  const downArrow = ()=>{

    setDislike(dislike+1);
    
      }




  const history = useHistory();

  const redirect = () => {
    if (AuthService.loggedIn()) {
      console.log("you are already logged in")
    } else{
      history.push('/login')
    }
    }
  

  


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
     <CardGroup>
      <Card>
    
        <ModalImage variant="top" src={image1}
        small={image1}
        large={image1}
        alt=""
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <div className="star-container">
        <div className="starLike">
          <i className="fas fa-star starIcon" onClick={counter}></i>
           <span>{count}</span>
        </div>
        <div className="arrowDown">
          <i className="fas fa-arrow-alt-circle-down arrowIcon" onClick={downArrow}></i>
          <span>{dislike}</span>
          </div>
          </div>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <div>
          <button onClick={redirect}>Comments</button>
        </div>
        </Card.Body>
        <Card.Footer>
       <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>
  
      <Card>
      <ModalImage variant="top" src={image2}
      small={image2}
      large={image2}
      alt=""
      />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
      <ModalImage variant="top" src={image3}
      small={image3}
      large={image3}
      alt=""
      />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    <CardGroup>
    <Card>
    <ModalImage variant="top" src={image4}
    small={image4}
    large={image4}
    alt=""
    />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
    <ModalImage variant="top" src={image5}
    small={image5}
    large={image5}
    alt=""
    />
      <Card.Body>
        <Card.Title>Card title</Card.Title> 
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
    <ModalImage variant="top" src={image6}
    small={image6}
    large={image6}
    alt=""
    />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>


  <CardGroup>
  <Card>
  <ModalImage variant="top" src={image7}
  small={image7}
  large={image7}
  alt=""
  />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <ModalImage variant="top" src={image8}
  small={image8}
  large={image8}
  alt=""
  />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <ModalImage variant="top" src={image9}
  small={image9}
  large={image9}
  alt=""
  />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  
  </Card>

</CardGroup>

    </Container>
</main>


);
};
  

export default Home;