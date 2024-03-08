import { Row, Col, Card } from "react-bootstrap";

const FeaturesCard = () => {
  return (
    <Row>
      <Col lg={4}>
        <Card style={{ width: "100%", backgroundColor: "#dee2f0" }}>
          <Card.Body>
            <Card.Title className="text-center">Product Scanning</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted text-center">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text className="text-center">
              Ensure product authenticity in seconds. just scan, verify, and
              shop with confidence
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4}>
        <Card style={{ width: "100%", backgroundColor: "#dee2f0" }}>
          <Card.Body>
            <Card.Title className="text-center">Image Analysis</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted text-center">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text className="text-center">
              Trust PureCheck's image analysis for a meticulous examination of
              product authenticity
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
         <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4}>
        <Card style={{ width: "100%", backgroundColor: "#dee2f0" }}>
          <Card.Body>
            <Card.Title className="text-center">Text Analysis</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted text-center">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text className="text-center">
              Analyze product descriptions, packaging text, and user reviews for
              suspicious patterns.
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
         <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default FeaturesCard;
