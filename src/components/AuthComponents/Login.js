import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLoginUserMutation } from "../../lib/APIs/authAPI";
import { useGetCurrentUserMutation } from "../../lib/APIs/userAPI";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./Auth.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { user } = useSelector((state) => state.userState);
  const navigate = useNavigate();

  const [loginUser, { isError, error, isSuccess, isLoading }] =
    useLoginUserMutation();

  const [getCurrentUser, { isSuccess: getCurrentUserSuccess, data }] =
    useGetCurrentUserMutation();

  const onLoginUser = (event) => {
    event.preventDefault();

    if (!email || !password) {
      return;
    }

    loginUser({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      setSuccessMessage("Login success! Redirecting...");
      getCurrentUser();
      setTimeout(() => {
        navigate("/");
      }, 3000); // Redirect after 3 seconds
    }
  }, [isSuccess]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, getCurrentUserSuccess]);

  return (
    <div className={styles.login_container}>
      <div className={styles.login_content}>
        <div className={styles.form}>
          <h2>Welcome Back!</h2>
          <p>We're excited to see you again</p>

          {isError && (
            <div
              style={{
                width: "80%",
                display: "flex",
                margin: "0 auto",
                marginBottom: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
              class="alert alert-danger"
              role="alert"
            >
              {error?.data?.error || "Something went wrong!"}
            </div>
          )}

          {successMessage && (
            <div
              style={{
                width: "80%",
                display: "flex",
                margin: "0 auto",
                marginBottom: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="alert alert-success"
              role="alert"
            >
              {successMessage}
            </div>
          )}

          <form className="login-form" onSubmit={onLoginUser}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className={styles.input_field}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <div style={{ position: "relative" }}>
                <input
                  type={passwordVisible ? "text" : "password"} // Toggle visibility of password field
                  value={password}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  className={styles.input_field}
                />
                <FontAwesomeIcon
                  icon={passwordVisible ? faEyeSlash : faEye}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  style={{
                    position: "absolute",
                    right: "70px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value={isLoading ? "Please wait" : "Login"}
                className={styles.login_button}
              />
            </div>
          </form>
          <div>
            <Link to={"/forgot-password"} className={styles.forgot_password}>
              Forgot password?
            </Link>
          </div>
          <div>
            <p>
              Don't have an account?{" "}
              <Link to={"/sign-up"} className={styles.register_link}>
                Register here!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
