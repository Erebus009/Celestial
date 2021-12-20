import React, { useState, useEffect } from "react";
import "./style.scss";
import { storage } from "./../../firebase/index";

const PostPicture = (props) => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!image) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    
  };

  const handleFileUpload = (e) => {
    e.preventDefault()
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on("state_changed",snapshot => {},
    error => {
      console.log(error)
    }, () => {
      storage.ref("images").child(image.name).getDownloadURL().then(url => console.log(url))
      })
  };
  
  console.log("image:", image)

  return (
    
    <div className=" uploadContainer d-flex jsutify-content-center">
     
     <div className="uploadPost">
      <div className="Post-wrapper">
      <img src={preview} alt=""></img>
      </div>
      </div>
    
    
      <form className="imageForm">

          
        
        <input
          id="file-upload"
          className="custom-file-upload"
          type="file"
          onChange={handleChange}
        ></input>
        <p>Title of Photo</p>
        <input 
        type="text"
        placeholder="Enter title here"
        ></input>
        <p>Description of Photo</p>
        <textarea
        type="textarea"
        placeholder="Enter description here"
        >
        </textarea>
        <label htmlFor="file-upload" class="custom-file-upload">
          <i className="fa fa-cloud-upload"></i> Choose File
        </label>
        
        
        
        <div className="d-flex mt-3">
          <button className="btn btn-dark w-100" onClick={handleFileUpload}>Upload file</button>
        </div>
      </form>
      </div>
    
    
  );
};

export default PostPicture;
