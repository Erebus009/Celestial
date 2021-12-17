import React from 'react'
import {useState} from 'react';
import ModalImage from "react-modal-image";
import { useNavigate } from 'react-router-dom';
import AuthService from '../../utils/auth';
import { Link } from 'react-router-dom';
import './style.css'
import Card from 'react-bootstrap/Card';





const UserPictures = ({ allPictures }) => {
    const navigate = useNavigate();
    
    const redirect = () => {
        if (AuthService.loggedIn()) {
          console.log("you are already logged in");
        } else {
          navigate("/login");
        }
      };  

    const [count, setCount]= useState(30);

    const counter = ()=>{
  
  setCount(count+1);
  
    }
    const [dislike, setDislike]= useState(40);
    const downArrow = ()=>{
  
      setDislike(dislike+1);
      
        }
        

const timeStamp = (epochTime) => {
    
  var myDate = new Date(epochTime *1000);
  return myDate
}

return (
    <div className="container.fluid card-box ">
        {allPictures &&
        allPictures.map((picture ) => (
       
         
  
    
      <Card className="grid-item mb-3" key={picture._id}>
      <ModalImage variant="top" src={picture.imagelink}
       small={picture.imagelink}
       large={picture.imagelink}
       alt=""
       />
        <Card.Body >
         
          <Link to={`/pictures/${picture._id}`}><Card.Title>{picture.title}</Card.Title></Link>
          <div className="star-container">
       <div className="starLike">
         <i className="fas fa-star starIcon" onClick={counter}></i>
          <span>{picture.favcount} favorites</span>
       </div>
       <div className="arrowDown">
         <i className="fas fa-arrow-alt-circle-down arrowIcon" onClick={downArrow}></i>
         <span>{picture.commentcount} comments</span>
         </div>
         </div>
          <Card.Text className="py-4">
            {picture.text}
          </Card.Text>
        </Card.Body>
        <div className="container">
          <button className="btn btn-dark btn-sm text-white"onClick={redirect}>{picture.commentcount}</button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated ({picture.createdAt})</small>
        </Card.Footer>
        
      </Card>
      
    
  


    
        
     
      ))}
      </div>
)
}

export default UserPictures





   