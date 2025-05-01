import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const ServiceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem 1"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem 2"
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "Lorem 3"
    },
]

const ServiceList = () => {
    return <>
        {ServiceData.map((item, index) => (
            <Col lg="3" key={index}>
                <ServiceCard item={item} />
            </Col>
        )
        )
        }
    </>
}

export default ServiceList