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
  } else if (pathname === "/login") {
    titleData = {
      title: "PureCheck - Sign In",
      metaDescription:
        "Sign In page of PureCheck website, let's get you started when you sign in here",
    };
    //   } else if (pathname === "/about-me") {
    //     titleData = {
    //       title: "Tonye Codes - About Me",
    //       metaDescription:
    //         "About me page of Tonye Codes blog, this is where you find all the information about Tonye",
    //     };
    //   } else {
    //     titleData = {
    //       title: "Error 404 - Page Not Found",
    //       metaDescription: "Page does not exist",
    //     };
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
