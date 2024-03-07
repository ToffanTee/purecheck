import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useGetProductsByCompanyMutation } from "../../lib/APIs/productAPI";
import { useGetAllCompaniesByUserMutation } from "../../lib/APIs/companyApi";
import ErrorNotification from "./ErrorNotification";
import { useEffect } from "react";
import ProductQrCode from "./ProductQrCode";

const GenerateQrCode = () => {
  const [showCode, setShowCode] = useState(false);
  const [productName, setProductName] = useState("");
  const [codes, setCodes] = useState([]);
  const [company, setCompany] = useState("");
  const [getProductsByCompany, { data, isError, error, isSuccess, isLoading }] =
    useGetProductsByCompanyMutation();

  const [getAllCompaniesByUser, { data: userCompanies }] =
    useGetAllCompaniesByUserMutation();

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
    } else {
      return;
    }
  };

  const goBack = () => {
    setCodes([]);
    if (showCode) {
      return setShowCode(false);
    }
  };

  return (
    <Container>
      <Row>
        <ErrorNotification />

        <Col lg={3}></Col>
        <Col lg={9}>
          {!showCode && (
            <Form className="mt-5">
              <Form.Select
                aria-label="Default select example"
                className="mb-5"
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
