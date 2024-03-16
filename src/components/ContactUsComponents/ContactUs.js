// import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useSendContactUsMutation } from "../../lib/APIs/contactUsApi";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ErrorNotification from "../AdminComponents/ErrorNotification";
import SuccessNotification from "../AdminComponents/SuccessNotification";
import styles from "../CommunityComponents/Community.module.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const notify = (errorMessage) => toast(errorMessage);

  const [sendContactUs, { isError, error, data, isLoading, isSuccess }] =
    useSendContactUsMutation();

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      return;
    }

    sendContactUs({
      name,
      email,
      message,
    });
  };

  useEffect(() => {
    if (isError) {
      notify(error?.data?.error || "something went wrong");
    }

    if (isSuccess) {
      notify(data?.message);
    }
  }, [isError, isSuccess]);

  return (
    <Container>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          {isError ? <ErrorNotification /> : <SuccessNotification />}
          <Form className="mt-20" onSubmit={onSubmitForm}>
            <Form.Group>
              <h2 className="text-3xl text-center font-bold mb-8">
                Contact Us
              </h2>
              <p className="mt-2 text-lg text-center leading-8 text-gray-600">
                Let us help you build trust with your customers using PureCheck.
              </p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Full Name
              </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Email
              </Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Message
              </Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="Your message here..."
                required
                onChange={(event) => setMessage(event.target.value)}
              />
            </Form.Group>
            <Button
              className={styles.modalBtn}
              variant="primary"
              type="submit"
              value={isLoading ? "Please wait..." : "Send Message"}
              disabled={isLoading}
            >
              {isLoading ? "Please wait..." : "Send Message"}
            </Button>{" "}
          </Form>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
