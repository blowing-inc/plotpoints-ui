import React from 'react';

import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';

const Content: React.FC = (props) => {
  return (
    <div>
      <Container flex>
        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
          <Col xs={{ order: 2 }} md={{ size: 2, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
            <ListGroup>
              <ListGroupItem className="justify-content-between" tag="a" href="#" action active>Group 1 <Badge pill>14</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" tag="a" href="#" action>Book Clubbing <Badge pill>2</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" tag="a" href="#" action>Secret Group Without Evan <Badge pill>1</Badge></ListGroupItem>
            </ListGroup>

          </Col>
          
          <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;