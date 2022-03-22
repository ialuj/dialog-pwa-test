import React, { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const ImageCard = (props: any) => {

    const { src, width, height } = props;

    return (
       <div>
          <Container>
              <Row>
                  <Col xs={6} md={4}>
                     <Image src={src} width={width} height={height} />
                  </Col>
              </Row>
          </Container>
       </div>
    )

}

export default ImageCard;