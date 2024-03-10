import { Row, Col, Card } from "react-bootstrap";
import styles from "./Home.module.css";

const FeaturesCard = () => {
  return (
    <Row className={styles.feature_section}>
      <Col lg={4}>
        <Card className={styles.feature_card}>
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
        <Card className={styles.feature_card}>
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
        <Card className={styles.feature_card}>
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
