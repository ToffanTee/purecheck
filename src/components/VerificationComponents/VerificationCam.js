import { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import qrCodeParser from "qrcode-parser";
import { Container, Row, Col } from "react-bootstrap";
import { useVerifyProductMutation } from "../../lib/APIs/productVerificationApi";

const VerificationCam = () => {
  const [qrCode, setQrCode] = useState("");

  const [verifyProduct, { data, isError, error, isSuccess, isLoading }] =
    useVerifyProductMutation();

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const webCamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webCamRef.current.getScreenshot();
    return setQrCode(imageSrc);
  }, [webCamRef]);

  useEffect(() => {
    const onVerifyQrCode = async () => {
      try {
        const result = await qrCodeParser(qrCode);

        verifyProduct({ name: "Test Product", itemCode: result });
      } catch (error) {
        console.log(error);
      }
    };

    onVerifyQrCode();
  }, [qrCode, capture]);

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Webcam
            imageSmoothing={true}
            audio={false}
            ref={webCamRef}
            height={900}
            screenshotFormat="image/png"
            width={1280}
            videoConstraints={videoConstraints}
            mirrored={true}
          />

          <div className="text-center mt-3 mb-3">
            <button className="image-capture" onClick={capture}>
              CAPTURE
            </button>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default VerificationCam;
