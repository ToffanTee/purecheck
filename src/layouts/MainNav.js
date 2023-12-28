import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <Navbar className={styles.nav}>
      <Container className="nav_container" expand="lg" fluid display>
        <Navbar.Brand href="/" className={styles.purecheck}>
          PURECHECK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> </Nav>

          <Nav className={styles.nav_items}>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </Nav>

          <Nav>
            <NavLink className={styles.nav_links} to="/sign-up">
              <Button className={styles.sign_up}>Login</Button>
            </NavLink>
            <NavLink className={styles.nav_links} to="/login">
              <Button className={styles.login}>Register</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
