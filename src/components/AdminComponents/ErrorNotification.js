import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ErrorNotification = () => {
  // const toastStyle = {
  //   // Define styles for the red theme
  //   color: "red",
  // };

  return (
    <ToastContainer
      position="top-center"
      autoClose={7000} //300000 5000
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      type="error"
    />
  );
};

export default ErrorNotification;
