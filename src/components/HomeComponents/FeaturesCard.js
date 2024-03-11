import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQrcode, faUsers, faBlog } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";

const FeaturesCard = () => {
  return (
    <Row className={styles.feature_section}>
      <Col lg={4}>
        <Card className={styles.feature_card}>
          <Card.Body>
            <div className={styles.iconCircle}>
              <FontAwesomeIcon icon={faQrcode} className={styles.icon} />
            </div>
            <Card.Title className="text-center">Product Scanning</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted text-center">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text className="text-center">
              Ensure product authenticity in seconds. just scan, verify, and
              shop with confidence.
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4}>
        <Card className={styles.feature_card}>
          <Card.Body>
            <div className={styles.iconCircle}>
              <FontAwesomeIcon icon={faBlog} className={styles.icon} />
            </div>
            <Card.Title className="text-center">Blog</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted text-center">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text className="text-center">
              A hub for articles and updates on product authentication and
              security within PureCheck.
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
         <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4}>
        <Card className={styles.feature_card}>
          <Card.Body>
            <div className={styles.iconCircle}>
              <FontAwesomeIcon icon={faUsers} className={styles.icon} />
            </div>

            <Card.Title className="text-center">Community</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted text-center">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text className="text-center">
              A forum for PureCheck users and experts to collaborate and discuss
              authentication methods.
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
