import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useCreateUserMutation } from "../../lib/APIs/userAPI";
import React from "react";
import styles from "../AuthComponents/Auth.module.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(true);

  const navigate = useNavigate();

  const [createUser, { isError, error, isSuccess, isLoading }] =
    useCreateUserMutation();
  console.log(error);
  const onSubmitForm = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return;
    }

    createUser({
      firstName,
      middleName,
      lastName,
      email,
      password,
      confirmPassword,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setSuccessMessage(
        "Account created successfully! Redirecting to login..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 3000); // Redirect after 3 seconds
    }
  }, [isSuccess, navigate]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate("/login");
  //   }
  // }, [isSuccess]);
  // useEffect(() => {
  //   // Set error message and clear it after 5 seconds
  //   if (isError) {
  //     setErrorMessage(error?.data?.error);
  //     const timer = setTimeout(() => {
  //       setErrorMessage("");
  //     }, 5000);
  //     return () => clearTimeout(timer); // Cleanup the timer to prevent memory leaks
  //   }
  // }, [isError, error]);
  useEffect(() => {
    // Check if all fields are filled
    setAllFieldsFilled(
      firstName && lastName && email && password && confirmPassword
    );
  }, [firstName, lastName, email, password, confirmPassword]);

  return (
    <div className={styles.login_container}>
      <div className={styles.login_content}>
        <div className={styles.form}>
          <h2>Create An Account</h2>

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
              {error?.data?.error}
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

          <form onSubmit={onSubmitForm} className="register-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Firstname*"
                onChange={(event) => setFirstName(event.target.value)}
                className={styles.input_field}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Middlename (optional)"
                onChange={(event) => setMiddleName(event.target.value)}
                className={styles.input_field}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Lastname*"
                onChange={(event) => setLastName(event.target.value)}
                className={styles.input_field}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email*"
                onChange={(event) => setEmail(event.target.value)}
                className={styles.input_field}
              />
            </div>
            <div className="form-group">
              <div style={{ position: "relative" }}>
                <input
                  type={passwordVisible ? "text" : "password"} // Toggle visibility of password field
                  value={password}
                  placeholder="Password*"
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
              <div style={{ position: "relative" }}>
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  value={confirmPassword}
                  placeholder="Confirm Password*"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className={styles.input_field}
                />{" "}
                <FontAwesomeIcon
                  icon={confirmPasswordVisible ? faEyeSlash : faEye}
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
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
                disabled={!allFieldsFilled} // Disable button if not all fields are filled or while loading
                type="submit"
                value={isLoading ? "Please wait..." : "Create Account"}
                className={styles.login_button}
              />
            </div>
          </form>
          <div className={styles.register_link}>
            <p>
              Already have an account? <a href={"/login"}>Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
