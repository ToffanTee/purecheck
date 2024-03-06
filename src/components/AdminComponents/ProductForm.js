import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useCreateProductMutation } from "../../lib/APIs/productAPI";
import ErrorNotification from "./ErrorNotification";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [NAFDAC_NO, setNAFDAC_NO] = useState("");
  const [company, setCompany] = useState("");
  const [productTotal, setProductTotal] = useState("");
  const [productCode, setProductCode] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const notify = (errorMessage) => toast(errorMessage);

  const [createProduct, { isError, error, isSuccess, isLoading }] =
    useCreateProductMutation();

  const onSubmitForm = (event) => {
    event.preventDefault();

    createProduct({
      name,
      description,
      NAFDAC_NO,
      company,
      productTotal,
      productCode,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setSuccessMessage("Product created successfully");

      setName("");
      setDescription("");
      setNAFDAC_NO("");
      setCompany("");
      setProductTotal("");
      setProductCode("");

      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      notify(error?.data?.error || "unable to create product");
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
                placeholder="Product Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Description"
                as="textarea"
                rows={3}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="NAFDAC Number"
                value={NAFDAC_NO}
                onChange={(event) => setNAFDAC_NO(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Total Quantity Available"
                value={productTotal}
                onChange={(event) => setProductTotal(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Product Code"
                value={productCode}
                onChange={(event) => setProductCode(event.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              value={isLoading ? "Please wait..." : "Create a Product"}
              disabled={isLoading}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductForm;
