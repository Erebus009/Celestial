import { useQuery } from "@apollo/client";
import React from "react";
import { useLocation } from "react-router-dom";
import { QUERY_PICTURE } from "../../utils/queries";

export default function PictureID() {
  const location = useLocation();
  const index = location.pathname.split('/')
  const locationPic = index.pop()

  const { loading, error, data } = useQuery(QUERY_PICTURE, {
    variables: {
      pictureId: locationPic,
    },
  });

  const pic = data?.getOnePic || "";

  if(error){
      return <h1>Unable to find picture</h1>
  }

  return (
  
  <div>
      {loading ?
       <h1>Picture page...</h1> : 

       <h1>Pictures here</h1>}
    </div>
    );
}
