import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useResetUserPasswordMutation } from "../../lib/APIs/authAPI";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./Auth.module.css";

const ResetPassword = () => {
  const [otp, setOtp] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [otpVisible, setOtpVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const { user } = useSelector((state) => state.userState);
  const navigate = useNavigate();

  const [resetUserPassword, { isError, data, error, isSuccess, isLoading }] =
    useResetUserPasswordMutation();

  const onVerifyUserAccount = (event) => {
    event.preventDefault();

    if (!email || !otp || !newPassword || !confirmNewPassword) {
      return;
    }
    resetUserPassword({
      email,
      otp,
      newPassword,
      confirmNewPassword,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setSuccessMessage(data?.message);

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
          <h2>Verify OTP!</h2>
          <p>Enter the OTP sent to your email to complete this process</p>

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
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                className={styles.input_field}
              />
            </div>
            <div className="form-group">
              <div style={{ position: "relative" }}>
                <input
                  type={otpVisible ? "number" : "password"} // Toggle visibility of password field
                  value={otp}
                  placeholder="Enter your OTP here"
                  onChange={(event) => setOtp(event.target.value)}
                  className={styles.input_field}
                />

                <FontAwesomeIcon
                  icon={otpVisible ? faEyeSlash : faEye}
                  onClick={() => setOtpVisible(!otpVisible)}
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
                  type={passwordVisible ? "text" : "password"} // Toggle visibility of password field
                  value={newPassword}
                  placeholder="Password*"
                  onChange={(event) => setNewPassword(event.target.value)}
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
                  value={confirmNewPassword}
                  placeholder="Confirm Password*"
                  onChange={(event) =>
                    setConfirmNewPassword(event.target.value)
                  }
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

export default ResetPassword;
