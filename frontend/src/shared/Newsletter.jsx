import React from "react";
import './newsletter.css'

import { Container, Row, Col } from "reactstrap";
import MaleTourist from '../assets/images/male-tourist.png'

const Newsletter = ({ tour }) => {
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subcribe nơ to get</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder='Nhập Email' />
                            <button className="btn newsletter__btn">
                                Subcribe
                            </button>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt obcaecati perferendis necessitatibus totam eos quam, odio cumque similique alias. Enim nostrum a libero exercitationem quod. Aliquid dolor illum saepe.</p>
                    </div>
                </Col>

                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={MaleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

}

export default Newsletter