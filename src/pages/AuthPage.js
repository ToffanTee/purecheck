import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom"; //

const AuthPage = () => {
  return (
    <Container>
      <Row>
        <Col md={3} lg={3}></Col>
        <Col md={6} lg={6}>
          {" "}
          <Outlet />
        </Col>
        <Col md={3} lg={3}></Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
