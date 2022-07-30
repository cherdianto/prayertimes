import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Link from 'next/link';

function Footer() {
  return (
    <React.Fragment>
        <footer className='footer-height d-flex align-items-center'>
            <Container>
                <Row className='fs-6 px-3'>
                    <Col lg={6} sm={12}>
                        <div className="footer-mobile-center">
                            <p>
                                {new Date().getFullYear()} - Made with <i className="ri-heart-2-fill text-danger"></i> by Candra Herdianto
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                            <div className="text-sm-end mt-3 mt-sm-0">
                                <ul className="list-inline mb-0 footer-social-link footer-mobile-center">
                                    <li className="list-inline-item">
                                        <Link href="https://www.facebook.com/candra.herdianto" className="avatar-xs d-block">
                                            <div>
                                                <i className="ri-facebook-fill fs-5"></i>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="https://github.com/cherdianto" className="avatar-xs d-block">
                                            <div>
                                                <i className="ri-github-fill fs-5"></i>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="https://www.linkedin.com/in/candraherdianto/" className="avatar-xs d-block">
                                            <div>
                                                <i className="ri-linkedin-fill fs-5"></i>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="https://www.instagram.com/candrh/" className="avatar-xs d-block">
                                            <div>
                                                <i className="ri-instagram-fill fs-5"></i>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                </Row>
            </Container>
        </footer>
    </React.Fragment>
  )
}

export default Footer