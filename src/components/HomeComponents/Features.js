import FeaturesCard from "./FeaturesCard";
import { Container, Row } from "react-bootstrap";
import styles from "./Home.module.css";

const Features = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className={`text-center mb-5 ${styles.feature_text}`}>
        Features section
      </h1>
      {/* <div className={styles.features_div}></div> */}
      <Row>
        <FeaturesCard />
      </Row>
    </Container>
  );
};

export default Features;
