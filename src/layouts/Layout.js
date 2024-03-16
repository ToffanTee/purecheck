import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import MainNav from "./MainNav";
import Footer from "./Footer";
import SEO from "../helpers/SEO";

const Layout = (props) => {
  const location = useLocation();
  //console.log(location); location is an object and we are destucturing pathname

  let titleData;

  const { pathname } = location;

  if (pathname === "/") {
    titleData = {
      title: "Home - PureCheck",
      metaDescription:
        "Home page of PureCheck, the number one leading product authentication website in Nigeria",
    };
  } else if (pathname === "/sign-up") {
    titleData = {
      title: "Sign Up - PureCheck",
      metaDescription:
        "Sign Up page of PureCheck website, let's get you started when you sign up",
    };
  } else if (pathname === "/verify-account") {
    titleData = {
      title: "Verify Account - PureCheck",
      metaDescription: "Account verification page of PureCheck website.",
    };
  } else if (pathname === "/login") {
    titleData = {
      title: "Sign In - PureCheck",
      metaDescription:
        "Sign In page of PureCheck website, let's get you started when you sign in here",
    };
  } else if (pathname === "/verify-product") {
    titleData = {
      title: "Verify Product - PureCheck",
      metaDescription: "Product verification page of PureCheck website.",
    };
  } else if (pathname === "/blog") {
    titleData = {
      title: "Blog - PureCheck",
      metaDescription: "Blog page of PureCheck website.",
    };
  } else if (pathname === "/community") {
    titleData = {
      title: "Community - PureCheck",
      metaDescription: "Community page of PureCheck website.",
    };
  } else if (pathname === "/contactus") {
    titleData = {
      title: "Contact Us - PureCheck",
      metaDescription: "Contact Us page of PureCheck website.",
    };
  } else if (pathname === "/admin") {
    titleData = {
      title: "Admin - PureCheck",
      metaDescription: "Admin page of PureCheck website.",
    };
  } else {
    titleData = {
      title: "Error 404 - Page Not Found",
      metaDescription: "Page does not exist",
    };
  }

  SEO(titleData);
  return (
    <Fragment>
      <header>
        <MainNav />
      </header>
      <main>{props.children}</main>
      {pathname !== "/admin" && <Footer />}
    </Fragment>
  );
};

export default Layout;
