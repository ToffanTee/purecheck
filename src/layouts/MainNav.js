import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLogoutUserMutation } from "../lib/APIs/authAPI";
import { useGetCurrentUserMutation } from "../lib/APIs/userAPI";
import { useEffect } from "react";
import styles from "./MainNav.module.css";

const MainNav = () => {
  const [getCurrentUser, response] = useGetCurrentUserMutation();

  const [logoutUser, { isSuccess }] = useLogoutUserMutation();

  const { user } = useSelector((state) => state.userState);

  useEffect(() => {
    const onGetCurrentUser = async () => {
      await getCurrentUser();
    };
    onGetCurrentUser();
  }, [getCurrentUser]);

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
    <Navbar expand="md" className={`${styles.nav_bar} fixed-top`}>
      <Container fluid>
        <Navbar.Brand>
          <NavLink className={styles.brand_name} to={"/"}>
            PureCheck
          </NavLink>
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
