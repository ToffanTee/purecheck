import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Home.module.css";
import heroImage from "../../assets/hero_image.png";

const Hero = () => {
  return (
    <Container fluid className={styles.hero_container}>
      <Row>
        <Col md={6}>
          <div className={styles.hero_div}>
            <h1 className={styles.hero_header}>Welcome to PURECHECK</h1>

            <p className={styles.hero_text}>
              Shop with confidence knowing that<br></br> PURECHECK has your
              back, instantly <br></br> verifying the authenticity of items with
              a simple scan.
            </p>

            <Button className={styles.button} type="submit">
              Start Verification
            </Button>
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.image_div}>
            <img
              className={styles.heroImage}
              src={heroImage}
              alt="hero_image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
