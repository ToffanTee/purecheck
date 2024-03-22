import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useGetProductsByCompanyMutation } from "../../lib/APIs/productAPI";
import { useGetAllCompaniesByUserMutation } from "../../lib/APIs/companyApi";
import { toast } from "react-toastify";
import ErrorNotification from "./ErrorNotification";
import SuccessNotification from "./SuccessNotification";
import { useEffect } from "react";
import ProductQrCode from "./ProductQrCode";

const GenerateQrCode = () => {
  const [showCode, setShowCode] = useState(false);
  const [productName, setProductName] = useState("");
  const [codes, setCodes] = useState([]);
  const [company, setCompany] = useState("");

  const notify = (errorMessage) => toast(errorMessage);

  const [getAllCompaniesByUser, { data: userCompanies }] =
    useGetAllCompaniesByUserMutation();

  const [getProductsByCompany, { data, isError, error, isLoading }] =
    useGetProductsByCompanyMutation();

  useEffect(() => {
    getAllCompaniesByUser();
  }, []);

  useEffect(() => {
    const selectProductCodesToGenerate = () => {
      const productCodeToGenerate = data?.products.find(
        (prod) => prod.name === productName
      );

      if (productCodeToGenerate) {
        return setCodes(productCodeToGenerate.items);
      }
    };

    if (productName) {
      selectProductCodesToGenerate();
    } else {
      setCodes([]);
    }
  }, [productName, data?.products]);

  useEffect(() => {
    if (company) {
      getProductsByCompany(company);
    }
  }, [company]);

  const onGenerateCode = (event) => {
    event.preventDefault();
    if (codes.length > 0) {
      setShowCode(true);
      notify("Product QR codes generated");
    } else {
      return;
    }
  };

  useEffect(() => {
    if (isError) {
      notify(error?.data?.error || "Unable to generate QR code");
    }
  }, [isError, error]);

  const goBack = () => {
    setCodes([]);
    if (showCode) {
      return setShowCode(false);
    }
  };

  return (
    <Container>
      <Row>
        {isError ? <ErrorNotification /> : <SuccessNotification />}

        <Col lg={3}></Col>
        <Col lg={9}>
          <h1 className="d-block text-xl font-semibold leading-6 text-gray-900">
            Generate QR Code
          </h1>
          {!showCode && (
            <Form className="mt-5">
              <Form.Group>
                <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                  Company
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(event) => setCompany(event.target.value)}
                >
                  <option value={""}>Select Company</option>
                  {userCompanies?.map((company) => {
                    return (
                      <option value={company.name} key={company._id}>
                        {company.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label className="d-block text-sm font-semibold leading-6 text-gray-900">
                  Product
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="mb-5"
                  onChange={(event) => setProductName(event.target.value)}
                >
                  <option value={""}>Select Product</option>
                  {data?.products?.map((product) => {
                    return (
                      <option value={product.name} key={product._id}>
                        {product.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                value={"Generate"}
                disabled={false}
                onClick={onGenerateCode}
              >
                Generate QR Code
              </Button>
            </Form>
          )}

          {showCode && (
            <ProductQrCode
              codes={codes}
              productName={productName}
              goBack={goBack}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GenerateQrCode;
