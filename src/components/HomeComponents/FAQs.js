import Accordion from "react-bootstrap/Accordion";
import styles from "./Home.module.css";

function FAQs() {
  return (
    <Accordion defaultActiveKey="0" className={`mb-30 ${styles.accordion_}`}>
      <h1 className={`text-center mb-5 ${styles.feature_text}`}>FAQs</h1>
      <Accordion.Item eventKey="0" className={styles.accordion_item}>
        <Accordion.Header>What is PureCheck?</Accordion.Header>
        <Accordion.Body>
          PureCheck is an innovative web application designed to help consumers
          identify counterfeit products by providing them with tools and
          resources to verify the authenticity of items before making a
          purchase.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className={styles.accordion_item}>
        <Accordion.Header>How does PureCheck work?</Accordion.Header>
        <Accordion.Body>
          PureCheck utilizes authenticating products via scanning QR codes,
          provided by manufacturers. The web app employs advanced technology to
          ensure accuracy and reliability in counterfeit detection.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className={styles.accordion_item}>
        <Accordion.Header>
          What types of products can PureCheck authenticate?
        </Accordion.Header>
        <Accordion.Body>
          PureCheck can authenticate a wide range of products, including
          electronics, fashion items, cosmetics, pharmaceuticals, and more. The
          web app supports various industries and brands to help users verify
          the authenticity of their purchases effectively.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className={styles.accordion_item}>
        <Accordion.Header>
          How accurate is PureCheck in detecting counterfeit products?
        </Accordion.Header>
        <Accordion.Body>
          PureCheck leverages state-of-the-art technology and collaborates with
          manufacturers to ensure the highest level of accuracy in counterfeit
          detection. While we strive for precision, it's essential to note that
          no method is foolproof, and users should always exercise caution when
          making purchases.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className={styles.accordion_item}>
        <Accordion.Header>
          How can I provide feedback or suggestions for PureCheck?
        </Accordion.Header>
        <Accordion.Body>
          We value user feedback and actively encourage our users to share their
          thoughts, suggestions, and experiences with PureCheck. You can submit
          feedback directly within the app or contact our support team through
          email or social media channels.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FAQs;
