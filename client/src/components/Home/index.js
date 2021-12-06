import React from "react";
import "./styles/home.css";

import APOD from "../PictureCards/APOD";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import TopPics from "./TopPics";
import { useQuery } from "@apollo/client";
import { QUERY_PICTURES } from "../../utils/queries";
import UserPictures from "../../components/UserPictures";


const Home = () => {
  // For loading data of user uploaded pictures
  const [limit, setLimit] = useState(9);

  const { loading, data, fetchMore } = useQuery(QUERY_PICTURES, {
    variables: {
      offset: 0,
      limit: limit,
    },
  });



  const allPictures = data?.allPictures || [];




 

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
        
        {loading ? (
              <div>Loading...</div>
              
            ) : (
              <UserPictures
                allPictures={allPictures}
                onLoadMore={() =>
                  fetchMore({
                    variables: {
                      offset: data.allPictures.length,
                    },
                  })
                }
              />
            )}
           
    </main>
  );
};

export default Home;
