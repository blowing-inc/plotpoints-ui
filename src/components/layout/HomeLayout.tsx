import React from 'react';

import { Container, Row, Col } from 'reactstrap';

const HomeLayout: React.FC = (props) => {
  return (
    <div>
      <Container>
        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
          <Col xs={{ order: 1 }} md={{ size: 9, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeLayout;
