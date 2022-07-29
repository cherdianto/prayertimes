import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Container, Row, Col } from 'reactstrap'
import Image from 'next/image'

import imgCover from '/public/small/imgCover.jpg'
import TimeComponent from './_time'

function Main() {
  return (
    <React.Fragment>
        <Container>
            <div className='rounded height-90 p-2'>
                <Row>
                    <Col>
                        <h1>Tanggal</h1>
                    </Col>
                </Row>
                <Row>
                <div className="text-center">
                    <h1>11:15 AM</h1>
                    <h4>50 menit menuju sholat Ashar</h4>
                </div>
                </Row>
                <Row className='d-flex justify-content-center gap-4 align-self-end'>
                    <TimeComponent />
                    <TimeComponent />
                    <TimeComponent />
                    <TimeComponent />
                    <TimeComponent />
                    <TimeComponent />
                </Row>
            </div>
        </Container>
    </React.Fragment>
  )
}

export default Main