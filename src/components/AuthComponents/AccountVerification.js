import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyUserAccountMutation } from "../../lib/APIs/authAPI";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./Auth.module.css";

const AccountVerification = () => {
  const [verificationToken, setVerificationToken] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { user } = useSelector((state) => state.userState);
  const navigate = useNavigate();

  const [verifyUserAccount, { isError, error, isSuccess, isLoading }] =
    useVerifyUserAccountMutation();

  const onVerifyUserAccount = (event) => {
    event.preventDefault();

    if (!verificationToken) {
      return;
    }
    verifyUserAccount({ verificationToken });
  };

  useEffect(() => {
    if (isSuccess) {
      setSuccessMessage("Verification success! Redirecting...");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className={styles.login_container}>
      <div className={styles.login_content}>
        <div className={styles.form}>
          <h2>Verify your account!</h2>
          <p>Enter your OTP to verify your account</p>

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

          <form className="verification-form" onSubmit={onVerifyUserAccount}>
            <div className="form-group">
              <div style={{ position: "relative" }}>
                <input
                  type={passwordVisible ? "text" : "password"} // Toggle visibility of password field
                  value={verificationToken}
                  placeholder="Enter your OTP here"
                  onChange={(event) => setVerificationToken(event.target.value)}
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
                value={isLoading ? "Please wait" : "Confirm"}
                className={styles.login_button}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountVerification;
