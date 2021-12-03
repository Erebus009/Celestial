import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";

const pictures = [
  {
    title: "title here",
    description: "description here",
    url: "https://apod.nasa.gov/apod/image/2110/DarkMatter_KipacAmnh_1200.jpg",
    userID: "1234",
  },
];

export default function TopPics() {
    console.log(pictures);
  return (
    <Container className="p-3 rounded text-center" fluid="md">
      <Carousel fade controls={false}>
        {/* {pictures.map((pic) => (
            
          <>
            <Carousel.Item style={{ height: "75vh" }}>
              <img
                className="d-block w-100"
                src="https://apod.nasa.gov/apod/image/2110/DarkMatter_KipacAmnh_1200.jpg"
                alt="Popular Post #1"
              />
            <Carousel.Caption>
              <h3></h3>
            </Carousel.Caption>
            </Carousel.Item>

          </>
        ))} */}

        <Carousel.Item style={{ height: "75vh" }}>
          <img
            className="d-block w-100"
            src="https://apod.nasa.gov/apod/image/2110/DarkMatter_KipacAmnh_1200.jpg"
            alt="Popular Post #2"
          />
          <Carousel.Caption>
            <h3>Title Here</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "75vh" }}>
          <img
            className="d-block w-100"
            src="https://apod.nasa.gov/apod/image/2111/HorseFlame_Ayoub_4305.jpg"
            alt="Popular Post #3"
          />
          <Carousel.Caption>
            <h3>Title Here</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
