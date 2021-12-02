import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

export default function APOD(props) {

    const [photoOTDay, setPhotoOTDay] = useState()

    async function getAPOD(){
        const date = new Date();
        const today = date.getFullYear() +"-"+(date.getMonth()+1)+"-"+(date.getDate() < 10 ? "0"+date.getDate() : date.getDate())
        console.log(today);

        const photoData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=WbDlakTXch19fafsknLbL5rjElseOcJRsyeix8r3&date=${today}`)
        setPhotoOTDay(await photoData.json())
        console.log(photoOTDay);
    }

    useEffect(() => {
        getAPOD() 

    }, [])


    return (
        <Container className='border border-light p-3 ' fluid='md'>
            <Row className='align-center text-center' style={{color:"white"}} >
                <Col md={6} sm={12}>
                    <Image src={photoOTDay.url} rounded fluid />
                </Col>
                <Col md={6} sm={12} >
                    <h2>{photoOTDay.title}</h2>
                    <p>{photoOTDay.explanation.slice(0,150) + "..."}</p>
                    {/* <Row className='justify-content-end mr-3'>
                        <Col md={1} sm={1}>
                        <span>⭐</span>
                        </Col>
                        <Col md={1} sm={1}>
                        <span>🗨</span>
                        </Col>
                    </Row> */}
                </Col>
            </Row>
  
        </Container>
    )
}
