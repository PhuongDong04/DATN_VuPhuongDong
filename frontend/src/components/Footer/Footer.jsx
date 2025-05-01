import React from "react";
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';

const quick__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tour',
        display: 'Tours'
    },
]

const quick__links2 = [
    {
        path: '/gallery',
        display: 'Gallery'
    },
    {
        path: '/login',
        display: 'login'
    },
    {
        path: '/register',
        display: 'Register'
    },
]


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="logo">
                            <img src={logo} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores iste ipsam ea autem, quasi ducimus corporis! Aliquid nemo neque iste explicabo laudantium eos sunt totam modi dolorum. Animi, ipsam?</p>

                            <div className="social__links d-flex align-items-center gap-4">
                                <span>
                                    <Link to='#'><i class="ri-youtube-fill"></i></Link>
                                </span>

                                <span>
                                    <Link to='#'><i class="ri-github-fill"></i></Link>
                                </span>

                                <span>
                                    <Link to='#'><i class="ri-facebook-box-fill"></i></Link>
                                </span>

                                <span>
                                    <Link to='#'><i class="ri-instagram-fill"></i></Link>
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer