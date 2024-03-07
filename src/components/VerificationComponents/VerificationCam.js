import { Container, Row, Col } from "react-bootstrap";
import { useVerifyProductMutation } from "../../lib/APIs/productVerificationApi";
import { toast } from "react-toastify";
import ErrorNotification from "../AdminComponents/ErrorNotification";
import SuccessNotification from "../AdminComponents/SuccessNotification";
import { Scanner } from "@yudiel/react-qr-scanner";
import "./Verification.css";
import { useEffect } from "react";

const VerificationCam = () => {
  const notify = (errorMessage) => toast(errorMessage);

  const [verifyProduct, { data, isError, error, isSuccess, isLoading }] =
    useVerifyProductMutation();

  useEffect(() => {
    if (isError) {
      notify(error?.data?.error || "something went wrong");
    }

    if (isSuccess) {
      notify("verification successful");
    }
  }, [isError, isSuccess]);

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          {isError ? <ErrorNotification /> : <SuccessNotification />}

          <Scanner
            onResult={(text, result) =>
              verifyProduct({ name: "Test Product", itemCode: text })
            }
            onError={(error) => notify(error?.message)}
          />
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default VerificationCam;
