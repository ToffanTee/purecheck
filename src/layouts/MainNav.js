import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./MainNav.module.css";

const MainNav = () => {
  const navData = [
    {
      path: "/Blog",
      name: "Blog",
    },
    {
      path: "/Community",
      name: "Community",
    },
    {
      path: "/Pricing",
      name: "Pricing",
    },
    {
      path: "/ContactUs",
      name: "Contact Us",
    },
  ];
  return (
    <Navbar expand="md" className={styles.nav_bar}>
      <Container fluid>
        <Navbar.Brand href="/" className={styles.brand_name}>
          PURECHECK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navData.map((item) => (
              <NavLink
                className={styles.list_item}
                to={item.path}
                key={item.name}
              >
                {item.name}
              </NavLink>
            ))}
          </Nav>

          <Nav className={`ms-auto`}>
            <NavLink className={styles.nav_links} to="/login">
              <Button className={styles.sign_up}>Login</Button>
            </NavLink>
            <NavLink className={styles.nav_links} to="/sign-up">
              <Button className={styles.login}>Register</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
