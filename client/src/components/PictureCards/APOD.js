import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Image from 'react-bootstrap/Image'

const queryClient = new QueryClient();

export default function APOD(props) {


    return (
        <Container className='p-3 ' fluid='md'>
            

                    <QueryClientProvider client={queryClient}>
                        <GetAPI />
                    </QueryClientProvider>
 
        </Container>
    )
}


function GetAPI(){

    const { isLoading, isError, data, error }= useQuery(['getPic'], async () => {
        const date = new Date();
        const today = date.getFullYear() +"-"+(date.getMonth()+1)+"-"+(date.getDate() < 10 ? "0"+date.getDate() : date.getDate())
        console.log(today);

        const photoData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=WbDlakTXch19fafsknLbL5rjElseOcJRsyeix8r3&date=${today}`)
        if(!photoData.ok){
            throw new Error('Issues connecting to NASA API')
        }
        return photoData.json()

    })

    if(isLoading){
        return(
        <Row className='align-center text-center' style={{color:"white"}} >
            <Col md={6} sm={12}>
                <span>Loading Photo</span>
            </Col>
            <Col md={6} sm={12} >
                <h2>Loading...</h2>
                <p>Loading...</p>
            </Col>
        </Row>
        )
    }

    if(isError){
        return(
            <Row className='align-center text-center' style={{color:"white"}} >
                <Col md={6} sm={12}>
                    <Image src="./test1.jpg" rounded fluid />
                </Col>
                <Col md={6} sm={12} className="text-center">
                    <h2>View of a massive planetary</h2>
                    <p>Lovely Rendered View</p>
                </Col>
            </Row>
        )
    }

    return(
    <Row className='align-items-center text-center' style={{color:"white"}} >
        <Col md={6} sm={12}>
            <Image src={data.url} rounded fluid />
        </Col>
        <Col md={6} sm={12} className='justify-content-center'>
            <h2>{data.title}</h2>
            <p>{data.explanation.slice(0,150) + "..."}</p>
        </Col>
    </Row>

    )

}