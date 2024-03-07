import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useCreateCompanyMutation } from "../../lib/APIs/companyApi";
import ErrorNotification from "./ErrorNotification";

const CompanyForm = (props) => {
  const [name, setName] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");

  const notify = (errorMessage) => toast(errorMessage);

  const [createCompany, { isError, error, isSuccess, data, isLoading }] =
    useCreateCompanyMutation();

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (!name || !subscriptionType) {
      return notify("company naeme and subscription plan are required");
    }

    createCompany({
      name,
      subscriptionType,
    });

    setName("");
    return setSubscriptionType("");
  };

  useEffect(() => {
    if (isError) {
      notify(error?.data?.error || "unable to create company");
    }
  }, [isError, error]);

  return (
    <Container>
      <Row>
        <ErrorNotification />

        <Col lg={3}></Col>
        <Col lg={9}>
          <Form className="mt-5" onSubmit={onSubmitForm}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Company Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              className="mb-5"
              onChange={(event) => setSubscriptionType(event.target.value)}
            >
              <option value={""}>Select Subscription Type</option>
              <option value={"Monthly"}>Monthly</option>
              <option value={"Quateryly"}>Quateryly</option>
              <option value={"Annually"}>Annually</option>
            </Form.Select>
            <Button
              variant="primary"
              type="submit"
              value={isLoading ? "Please wait..." : "Create Company"}
              disabled={isLoading}
            >
              Create Company
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyForm;
