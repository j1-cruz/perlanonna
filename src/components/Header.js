import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Container className="mt-2">
        <Row>
          <Col>
            <Card>
                <CardBody>
                  <CardTitle>Mates</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                <img width="100%" src="assets/images/productos/mates/mateverde1.png" alt="Card image cap" />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
          </Col>
          <Col>
            <Card>
                <CardBody>
                  <CardTitle>Cuencos</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                <img width="100%" src="assets/images/productos/cuencos/cuencosverdes.png" alt="Card image cap" />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
          </Col>
            <Col>
                <Card>
                    <CardBody>
                      <CardTitle>Tazas</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                    </CardBody>
                    <img width="100%" src="assets/images/productos/tazas/taza.png" alt="Card image cap" />
                    <CardBody>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <CardLink href="#">Card Link</CardLink>
                      <CardLink href="#">Another Link</CardLink>
                    </CardBody>
      </Card>
            </Col>
        </Row>
    </Container>
  );
};

export default Example;