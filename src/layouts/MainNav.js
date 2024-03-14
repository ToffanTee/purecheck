import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLogoutUserMutation } from "../lib/APIs/authAPI";
import { useGetCurrentUserMutation } from "../lib/APIs/userAPI";
import { useEffect, useState } from "react";
import styles from "./MainNav.module.css";

const MainNav = () => {
  const [expanded, setExpanded] = useState(false);
  const [getCurrentUser, response] = useGetCurrentUserMutation();
  const [logoutUser, { isSuccess }] = useLogoutUserMutation();

  const { user } = useSelector((state) => state.userState);

  useEffect(() => {
    const onGetCurrentUser = async () => {
      await getCurrentUser();
    };
    onGetCurrentUser();
  }, [getCurrentUser]);

  const handleNavLinkClick = () => {
    setExpanded(false); // Close the mobile menu upon click
  };

  const pingServer = async () => {
    await fetch(process.env.REACT_APP_DEV_BACKEND_URL);
  };

  useEffect(() => {
    setInterval(() => {
      pingServer();
    }, 5000);
  }, []);
  const navData = [
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/community",
      name: "Community",
    },
    // {
    //   path: "/pricing",
    //   name: "Pricing",
    // },
    {
      path: "/contactus",
      name: "Contact Us",
    },
  ];

  return (
    <Navbar
      expand="md"
      className={`${styles.nav_bar} fixed-top`}
      expanded={expanded}
    >
      <Container fluid>
        <Navbar.Brand>
          <NavLink
            className={styles.brand_name}
            to={"/"}
            onClick={() => setExpanded(false)}
          >
            PureCheck
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navData.map((item) => (
              <NavLink
                className={styles.list_item}
                to={item.path}
                key={item.name}
                onClick={handleNavLinkClick}
              >
                {item.name}
              </NavLink>
            ))}
          </Nav>

          <Nav className={`ms-auto`} onClick={handleNavLinkClick}>
            {!user && (
              <NavLink className={styles.nav_links} to="/sign-up">
                <Button className={styles.login}>Register</Button>
              </NavLink>
            )}

            {!user && (
              <NavLink className={styles.nav_links} to="/login">
                <Button className={styles.sign_up}>Login</Button>
              </NavLink>
            )}

            {user && (
              <NavLink className={styles.nav_links}>
                <Button className={styles.login} onClick={logoutUser}>
                  Logout
                </Button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
