import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useCreateCompanyMutation } from "../../lib/APIs/companyApi";
import ErrorNotification from "./ErrorNotification";
import SuccessNotification from "./SuccessNotification";

const CompanyForm = (props) => {
  const [name, setName] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");

  const notify = (errorMessage) => toast(errorMessage);

  const [createCompany, { isError, error, isSuccess, data, isLoading }] =
    useCreateCompanyMutation();

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (!name || !subscriptionType) {
      return notify("Company Name and Subscription plan are required");
    }

    createCompany({
      name,
      subscriptionType,
    });

    setName("");
    setSubscriptionType("");
    event.target.reset();
  };

  useEffect(() => {
    if (isError) {
      notify(error?.data?.error || "Unable to create company");
    }

    if (isSuccess) {
      notify(data?.message);
    }
  }, [isError, error, isSuccess]);

  return (
    <Container>
      <Row>
        {isError ? <ErrorNotification /> : <SuccessNotification />}

        <Col lg={3}></Col>
        <Col lg={9}>
          <h1 className="d-block text-xl font-semibold leading-6 text-gray-900">
            Create Company
          </h1>
          <Form className="mt-5" onSubmit={onSubmitForm}>
            <Form.Group className="mb-3">
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Company Name
              </Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Subscription
              </Form.Label>
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
            </Form.Group>

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
