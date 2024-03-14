import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useVerifyProductMutation } from "../../lib/APIs/productVerificationApi";
import { toast } from "react-toastify";
import ErrorNotification from "../AdminComponents/ErrorNotification";
import SuccessNotification from "../AdminComponents/SuccessNotification";
import { Scanner } from "@yudiel/react-qr-scanner";
import "./Verification.css";

const VerificationCam = () => {
  const [decodedText, setDecodedText] = useState("");

  const notify = (errorMessage) => toast(errorMessage);

  const [verifyProduct, { data, isError, error, isSuccess, isLoading }] =
    useVerifyProductMutation();

  useEffect(() => {
    if (isError) {
      notify(error?.data?.error || "something went wrong");
    }

    if (isSuccess) {
      notify(data?.message);
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    if (decodedText) {
      setTimeout(() => {
        verifyProduct({ itemCode: decodedText });
      }, 3000);
    }

    setDecodedText("");
  }, [decodedText]);

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          {isError ? <ErrorNotification /> : <SuccessNotification />}

          <Scanner
            onResult={(text, result) => setDecodedText(text)}
            onError={(error) => notify(error?.message)}
          />
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default VerificationCam;
