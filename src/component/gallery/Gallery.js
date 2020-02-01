import React from 'react';
import './Gallery.css'
import { Container,Col,Row,Card, Image } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/core/styles.scss';

class Gallery extends React.Component {

    render() {
        return (
            <AwesomeSlider  cssModule={AwsSliderStyles}>
                <div data-src="https://i.imgur.com/qdCqCHS.jpg" />
                <div data-src="https://i.imgur.com/yfJfkl8.jpg" />
                <div data-src="https://i.imgur.com/69oeX5c.jpg" />
                <div data-src="https://i.imgur.com/xgjQNO5.jpg" />
            </AwesomeSlider>
        );
    }
}

export default Gallery;