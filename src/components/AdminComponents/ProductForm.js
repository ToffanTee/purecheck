import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../lib/APIs/productAPI";
import { useGetAllCompaniesByUserMutation } from "../../lib/APIs/companyApi";
// import ProductList from "./ProductList";
import ErrorNotification from "./ErrorNotification";
import SuccessNotification from "./SuccessNotification";

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

    if (!name || !description || !NAFDAC_NO || !company || !productTotal) {
      return;
    }

    createProduct({
      name,
      description,
      NAFDAC_NO,
      company,
      productTotal,
      productCode: name.slice(0, 3).toUpperCase(),
    });

    setName("");
    setDescription("");
    setNAFDAC_NO("");
    setCompany("");
    setProductTotal("");
  };

  const onUpdateProduct = (event) => {
    event.preventDefault();

    if (!name || !description || !NAFDAC_NO || !company || !productTotal) {
      return;
    }

    updateProduct({
      name,
      description,
      NAFDAC_NO,
      company,
      productTotal,
      productCode: name.slice(0, 3).toUpperCase(),
    });

    setName("");
    setDescription("");
    setNAFDAC_NO("");
    setCompany("");
    setProductTotal("");
  };

  useEffect(() => {
    if (isSuccess) {
      notify("Product created successfully");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      notify(error?.data?.error || "Unable to create product");
    }

    if (updateProductSuccess) {
      notify("Product updated successfully");
    }

    if (updateProductError) {
      notify(productError?.data?.error || "Something went wrong");
    }
  }, [isError, error, updateProductError, updateProductSuccess]);

  useEffect(() => {
    getAllCompaniesByUser();
  }, []);

  return (
    <Container>
      <Row>
        {isError ? <ErrorNotification /> : <SuccessNotification />}

        <Col lg={3}></Col>
        <Col lg={6}>
          <h1 className="d-block text-xl font-semibold leading-6 text-gray-900">
            Create Product
          </h1>
          <Form className="mt-5 mb-20">
            <Form.Group className="mb-3">
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Product Name
              </Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Product Description
              </Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                NAFDAC Number
              </Form.Label>
              <Form.Control
                type="text"
                value={NAFDAC_NO}
                onChange={(event) => setNAFDAC_NO(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Company
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => setCompany(event.target.value)}
              >
                {data?.length > 0 ? (
                  <option style={{ color: "#333", opacity: 0.5 }}>
                    Select Company
                  </option>
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
              <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                Product Total
              </Form.Label>
              <Form.Control
                type="number"
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
      {/* <ProductList /> */}
    </Container>
  );
};

export default ProductForm;
