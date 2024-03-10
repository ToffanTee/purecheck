import { Container, Row, Col } from "react-bootstrap";

const ProductList = () => {
  return (
    <Container className="mb-20">
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <h1 className="d-block text-xl font-semibold leading-6 text-gray-900">
            Product List
          </h1>
          <table className="table-auto">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Product</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Test Product</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>2</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default ProductList;
