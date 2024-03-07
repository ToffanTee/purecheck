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
      title: "PureCheck - Home",
      metaDescription:
        "Home page of PureCheck, the number one leading product authentication website in Nigeria",
    };
  } else if (pathname === "/sign-up") {
    titleData = {
      title: "PureCheck - Sign Up",
      metaDescription:
        "Sign Up page of PureCheck website, let's get you started when you sign up",
    };
  } else if (pathname === "/verify-account") {
    titleData = {
      title: "PureCheck - Verify Account",
      metaDescription: "Account verification page of PureCheck website.",
    };
  } else if (pathname === "/login") {
    titleData = {
      title: "PureCheck - Sign In",
      metaDescription:
        "Sign In page of PureCheck website, let's get you started when you sign in here",
    };
  } else if (pathname === "/verify-product") {
    titleData = {
      title: "PureCheck - Verify Product",
      metaDescription: "Product verification page of PureCheck website.",
    };
  } else if (pathname === "/blog") {
    titleData = {
      title: "PureCheck - Blog",
      metaDescription: "Blog page of PureCheck website.",
    };
  } else if (pathname === "/community") {
    titleData = {
      title: "PureCheck - Community",
      metaDescription: "Community page of PureCheck website.",
    };
  } else if (pathname === "/contactus") {
    titleData = {
      title: "PureCheck - Contact Us",
      metaDescription: "Contact Us page of PureCheck website.",
    };
  } else if (pathname === "/admin") {
    titleData = {
      title: "PureCheck - Admin",
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
