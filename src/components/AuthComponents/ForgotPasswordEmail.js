import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForgotUserPasswordMutation } from "../../lib/APIs/authAPI";
import React from "react";
import styles from "./Auth.module.css";

const ForgotPasswordEmail = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [forgotUserPassword, { isError, data, error, isSuccess, isLoading }] =
    useForgotUserPasswordMutation();

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!email) {
      return;
    }

    forgotUserPassword({
      email,
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setSuccessMessage(data?.message);

      setTimeout(() => {
        navigate("/reset-password");
      }, 3000);
    }
  }, [isSuccess]);

  return (
    <div className={styles.login_container}>
      <div className={styles.login_content}>
        <div className={styles.form}>
          <h2>Reset your password!</h2>
          <p>Enter your email to reset your password</p>

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

          <form className="verification-form" onSubmit={onSubmitForm}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className={styles.input_field}
                onChange={(event) => setEmail(event.target.value)}
              />
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

export default ForgotPasswordEmail;
