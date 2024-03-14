import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SuccessNotification = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      type="success"
    />
  );
};

export default SuccessNotification;
