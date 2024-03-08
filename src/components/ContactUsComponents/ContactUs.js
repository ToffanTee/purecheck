// import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const ContactUs = () => {
  // const [agreed, setAgreed] = useState(false);

  return (
    <Container>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <Form className="mt-20">
            <Form.Group>
              <h2 className="text-3xl text-center font-bold mb-8">
                Contact Us
              </h2>
              <p className="mt-2 text-lg text-center leading-8 text-gray-600">
                Let us help you build trust with your customers using PureCheck.
              </p>
            </Form.Group>
            <Form.Group>
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Full Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name here..."
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email address here..."
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Message
              </Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="Your message here..."
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              // value={isLoading ? "Please wait..." : "Create a Product"}
              // disabled={isLoading}
              // onClick={onCreateProduct}
            >
              Send Message
            </Button>{" "}
          </Form>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
