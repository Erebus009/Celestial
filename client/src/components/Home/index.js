import React from "react";
import "./styles/home.css";

import APOD from "../PictureCards/APOD";
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect} from "react";
import TopPics from "./TopPics";
import UserPictures from "../../components/UserPictures";
import {db} from "../../firebase/index"
import { collection, getDocs } from "firebase/firestore"

const Home = () => {
  // For loading data of user uploaded pictures
 
  const [images, setImages ] = useState([])
  const userImagesRef = collection(db, "users")

  useEffect(()=> {
    const getImages = async () => {
      const data = await getDocs(userImagesRef)
      setImages(data.docs.map((doc)=> ({
        ...doc.data(), id: doc.id
      })))
      console.log(data.docs)
    }
    getImages()
  }, [])







 

  return (
    <main style={{ backgroundColor: "black" }}>
      <Container>
        <div className="mb-3">
          <TopPics />
        </div>
        <div className="mb-3">
          <APOD />
          
        </div>
        
         
          
        </Container>
        
              <UserPictures
                allPictures={images}
                
              />
            )
           
    </main>
  );
};

export default Home;
