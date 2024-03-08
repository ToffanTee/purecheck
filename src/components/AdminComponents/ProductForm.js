import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../lib/APIs/productAPI";
import { useGetAllCompaniesByUserMutation } from "../../lib/APIs/companyApi";
import ErrorNotification from "./ErrorNotification";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [NAFDAC_NO, setNAFDAC_NO] = useState("");
  const [company, setCompany] = useState("");
  const [productTotal, setProductTotal] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const notify = (errorMessage) => toast(errorMessage);

  const [createProduct, { isError, error, isSuccess, isLoading }] =
    useCreateProductMutation();

  const [
    updateProduct,
    {
      isError: updateProductError,
      error: productError,
      isSuccess: updateProductSuccess,
      isLoading: updateProductIsLooadig,
    },
  ] = useUpdateProductMutation();

  const [getAllCompaniesByUser, { data }] = useGetAllCompaniesByUserMutation();

  const onCreateProduct = (event) => {
    event.preventDefault();

    createProduct({
      name,
      description,
      NAFDAC_NO,
      company,
      productTotal,
      productCode: name.slice(0, 3).toUpperCase(),
    });
  };

  const onUpdateProduct = (event) => {
    event.preventDefault();

    updateProduct({
      name,
      description,
      NAFDAC_NO,
      company,
      productTotal,
      productCode: name.slice(0, 3).toUpperCase(),
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

      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      notify(error?.data?.error || "unable to create product");
    }

    if (updateProductError) {
      notify(productError?.data?.error || "something went wrong");
    }
  }, [isError, error, updateProductError]);

  useEffect(() => {
    getAllCompaniesByUser();
  }, []);

  console.log(productError);

  return (
    <Container>
      <Row>
        <ErrorNotification />

        <Col lg={3}></Col>
        <Col lg={9}>
          <Form className="mt-5  mb-5">
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                style={{ color: "#333", opacity: 0.5 }}
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                style={{ color: "#333", opacity: 0.5 }}
                type="text"
                placeholder="Description"
                as="textarea"
                rows={3}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>NAFDAC Number</Form.Label>
              <Form.Control
                style={{ color: "#333", opacity: 0.5 }}
                type="text"
                placeholder="NAFDAC Number"
                value={NAFDAC_NO}
                onChange={(event) => setNAFDAC_NO(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-5"
                onChange={(event) => setCompany(event.target.value)}
              >
                {data?.length > 0 ? (
                  <option>Select Company</option>
                ) : (
                  <option>No company created </option>
                )}
                {data?.map((company) => {
                  return (
                    <option value={company.name} key={company._id}>
                      {company.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Total</Form.Label>
              <Form.Control
                style={{ color: "#333", opacity: 0.5 }}
                type="number"
                placeholder="Total Quantity Available"
                value={productTotal}
                onChange={(event) => setProductTotal(event.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              value={isLoading ? "Please wait..." : "Create a Product"}
              disabled={isLoading}
              onClick={onCreateProduct}
            >
              Create Product
            </Button>{" "}
            <Button
              variant="warning"
              type="submit"
              value={isLoading ? "Please wait..." : "Create a Product"}
              disabled={isLoading}
              className="float-end"
              onClick={onUpdateProduct}
            >
              Update Product
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductForm;
