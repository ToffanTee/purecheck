import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import styles from "./Community.module.css";
import { useCreateThreadMutation } from "../../lib/APIs/threadAPI";
import { useState, useEffect } from "react";
import ErrorNotification from "../AdminComponents/ErrorNotification";
// import SuccessNotification from "../AdminComponents/SuccessNotification";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const CommunityDashboard = () => {
  // const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const notify = (errorMessage) => toast(errorMessage);

  const [createThread, { isError, error, isSuccess, data, isLoading }] =
    useCreateThreadMutation();

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (!title || title === "")
      return notify("Thread title/description is required");

    createThread({ title });

    setTitle("");
  };

  useEffect(() => {
    if (isError) {
      notify(error?.data?.error || "Unable to create thread");
    }
  }, [isError, error]);

  return (
    <Container className={styles.community}>
      <ErrorNotification />
      <h2 className={styles.communityTitle}>Create a Thread</h2>
      <Form className={styles.communityForm} onSubmit={onSubmitForm}>
        <Form.Group className={styles.thread_container}>
          <Form.Label htmlFor="thread">Title/Description</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          className={styles.threadBtn}
          value={isLoading ? "Please wait..." : "CREATE THREAD"}
        >
          CREATE THREAD
        </Button>
      </Form>
    </Container>
  );
};

export default CommunityDashboard;
