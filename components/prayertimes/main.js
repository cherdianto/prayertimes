import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Container, Row, Col } from 'reactstrap'
import axios from 'axios'
import TimeComponent from './_time'

function Main() {
    const [ lat, setLat ] = useState(null);
    const [ long, setLong ] = useState(null);
    const [ timings, setTimings ] = useState(null);
    const [ dateNow, setDateNow ] = useState(null);

    const getLoc = () => { 
        navigator.geolocation.getCurrentPosition(function(position){
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
            console.log(position)
        })
    }

    useEffect(() => {
        setInterval(()=> setDateNow(new Date(), 30000))
        getLoc();

        const url = 'https://api.aladhan.com/v1/timings/1398332113?latitude=' + lat + '&longitude=' + long + '&method=2'
        console.log(url);

        if (lat !== null && long !== null) {
            axios.get(url).then((response) => {
                setTimings(response.data.data.timings);
                setDateNow(response.data.data.date);
            }).catch((error) => {
                setTimings(null)
            })
        }
    },[lat, long])

  return (
    <React.Fragment>
        <Container className='g-0'>
            <div className='rounded height-90 p-2'>
                <Row className='p-3'>
                    <Col className='current-date d-flex align-items-center justify-content-between'>    
                        <div className="">
                            <i className="ri-calendar-todo-fill fs-1"></i>
                        </div>
                        <div className='d-flex flex-column'>
                            <div className="d-flex fs-5 fw-bold">
                                <p>
                                { dateNow != null && (
                                    dateNow.toLocaleString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })
                                )
                            }
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='current-time d-flex align-items-center justify-content-center my-5'>
                    <div className="text-center">
                        <p className='text-uppercase text-current-time fw-bold text-white'>
                            { dateNow != null && (
                                    dateNow.toLocaleString('en-GB', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    second: 'numeric',
                                    hour12: true
                                })
                                )
                            }
                        </p>
                        {/* <p className='text-white'>50 menit menuju sholat Ashar</p> */}
                    </div>
                </Row>
                { timings !== null ? (
                        <Row className='prayer-times d-flex justify-content-center gap-4 p-5'>
                            <TimeComponent prayer='Fajr' time={timings.Fajr} />
                            <TimeComponent prayer='Sunrise' time={timings.Sunrise} />
                            <TimeComponent prayer='Dhuhur' time={timings.Dhuhr} />
                            <TimeComponent prayer='Ashar' time={timings.Asr} />
                            <TimeComponent prayer='Maghrib' time={timings.Maghrib} />
                            <TimeComponent prayer='Isya' time={timings.Isha} />
                        </Row>
                    ) 
                    :
                    (
                        <p className="text-center fs-1">
                            <i className="ri-loader-line"></i>
                        </p>
                    )
                }
            </div>
        </Container>
    </React.Fragment>
  )
}

export default Main