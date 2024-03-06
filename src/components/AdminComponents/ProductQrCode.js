import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import QRCode from "react-qr-code";

const ProductQrCode = ({ codes, productName, goBack }) => {
  const onGoBack = () => {
    goBack();
  };
  return (
    <Container>
      <h1>{productName} Generated QRcodes</h1>

      <div>
        <FontAwesomeIcon
          icon={faEyeSlash}
          onClick={onGoBack}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
      <Row>
        {codes.length > 0 &&
          codes.map((code) => (
            <Col md={4} className="mb-3">
              <QRCode value={code} key={code} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ProductQrCode;
