import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { faQrcode, faUsers, faBlog } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const FeaturesCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top when component mounts
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls the window to the top when a link is clicked
  };
  return (
    <Row className={styles.feature_section}>
      <Col lg={4}>
        <Card className={styles.feature_card}>
          <Card.Body>
            <div className={styles.iconCircle}>
              <FontAwesomeIcon icon={faQrcode} className={styles.icon} />
            </div>
            <div className={styles.cardTitle}>
              <Link
                to={"/"}
                className={styles.feature_title}
                onClick={handleLinkClick}
              >
                Product Scanning
              </Link>
            </div>

            <Card.Text className="text-center">
              Ensure product authenticity in seconds. just scan, verify, and
              shop with confidence.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4}>
        <Card className={styles.feature_card}>
          <Card.Body>
            <div className={styles.iconCircle}>
              <FontAwesomeIcon icon={faBlog} className={styles.icon} />
            </div>
            <div className={styles.cardTitle}>
              <Link
                to={"/blog"}
                className={styles.feature_title}
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </div>

            <Card.Text className="text-center">
              A hub for articles and updates on product authentication and
              security within PureCheck.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4}>
        <Card className={styles.feature_card}>
          <Card.Body>
            <div className={styles.iconCircle}>
              <FontAwesomeIcon icon={faUsers} className={styles.icon} />
            </div>
            <div className={styles.cardTitle}>
              <Link
                to={"/community"}
                className={styles.feature_title}
                onClick={handleLinkClick}
              >
                Community
              </Link>
            </div>

            <Card.Text className="text-center">
              A forum for PureCheck users and experts to collaborate and discuss
              authentication methods.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default FeaturesCard;
