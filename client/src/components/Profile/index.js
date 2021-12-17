import "./profile.css";
import React from "react";

const Profile = () => {
  return (
    <div className="container.fluid d-columns mb-2 profile justify-content-start">
     <div className="container text-center mb-5">
          <h4 className="text-white">
            Made with{' '}
            <span
              className="emoji"
              role="img"
              aria-label="heart"
              aria-hidden="false"
            >
              ❤️
            </span>{' '}
           
          </h4>
        </div>
    </div>
  );
};

export default Profile;
