import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useGetSingleBlogMutation } from "../../lib/APIs/blogAPI";
import { Interweave } from "interweave";
import BlogImage from "../../assets/Blog/happy-client-with-their-box-delivered.jpg";
import "./Blog.css";

const SingleBlog = () => {
  const [getSingleBlog, { data, isLoading, error, isError }] =
    useGetSingleBlogMutation();

  const params = useParams();

  const { title } = params;

  useEffect(() => {
    getSingleBlog(title);
  }, [title]);

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col lg={0}></Col>
        <Col lg={12}>
          {data && (
            <div style={{ color: "#fff" }} className="single_post">
              <img
                src={BlogImage}
                alt="Blog Post"
                style={{ borderRadius: "20px", height: "500px", width: "100%" }}
                className="blog_image"
              />
              <p
                className="blog_title"
                style={{
                  marginTop: "20px",
                  color: "#000",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                {data.title}
              </p>
              <Interweave
                content={data.content}
                className="sinlgeBlogContent"
              />
            </div>
          )}
        </Col>
        <Col lg={0}></Col>
      </Row>
    </Container>
  );
};

export default SingleBlog;
