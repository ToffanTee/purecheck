import { Button, Container, Form } from "react-bootstrap";
import styles from "./Community.module.css";

const Replies = () => {
  return (
    <Container className="replies">
      <Form.Group className={styles.modal_content}>
        <Form.Label htmlFor="reply">Reply to the thread</Form.Label>
        <Form.Control
          as="textarea"
          aria-rowspan={5}
          type="text"
          className={styles.modalInput}
        ></Form.Control>

        <Button className={styles.modalBtn}>SEND</Button>
      </Form.Group>
    </Container>
  );
};

export default Replies;
