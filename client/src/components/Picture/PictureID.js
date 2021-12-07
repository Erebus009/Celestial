import { useQuery } from "@apollo/client";
import React from "react";
import { useLocation } from "react-router-dom";
import { QUERY_PICTURE } from "../../utils/queries";
import Comments from "./Comments/index";

export default function PictureID() {
  const location = useLocation();
  const index = location.pathname.split("/");
  const locationPic = index.pop();
  console.log(locationPic);
  const { loading, error, data } = useQuery(QUERY_PICTURE, {
    variables: {
      pictureId: locationPic,
    },
  });

  const pic = data?.picture || "";

  if (error) {
    return <h1>Unable to find picture</h1>;
  }
  console.log(pic);
  return (
    <div>
      {loading ? (
        <h1>Picture page...</h1>
      ) : (
        <>
          <div className="image-container">
            <img src={pic.imagelink} />
          </div>
          <div className="image-title" >
            <h1>{pic.title}</h1>
          </div>
          <div className="image-text">
            <h4>{pic.text}</h4>
          </div>
          <Comments currentComments={pic.comments} pictureId={locationPic} />
        </>
      )}
    </div>
  );
}
