import { Fragment, useRef } from "react";
import { getEmail, getOTP } from "../../helper/SessionHelper";
import { ErrorToast, IsEmpty } from "../../helper/FormHelper";
import { resetPasswordRequest } from "../../apiRequest/apiRequest";
import { useNavigate } from "react-router-dom";

export default function CreatePassword() {
  let PasswordRef,
    ConfirmPasswordRef = useRef();

  const navigate = useNavigate();

  const ResetPass = () => {
    let password = PasswordRef.value;
    let confirmPassword = ConfirmPasswordRef.value;

    if (IsEmpty(password)) {
      ErrorToast("Password is required");
    } else if (IsEmpty(confirmPassword)) {
      ErrorToast("Confirm Password is required");
    } else if (password !== confirmPassword) {
      ErrorToast("Password Mismatch");
    } else {
      resetPasswordRequest(getEmail(), getOTP(), password).then((result) => {
        if (result) {
          //   window.location.href = "/login";
          navigate("/login");
        }
      });
    }
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-4">
              <div className="card-body">
                <h4>SET NEW PASSWORD</h4>
                <br />
                <label>Your email address</label>
                <input
                  readOnly={true}
                  value={getEmail()}
                  placeholder="User Email"
                  className="form-control animated fadeInUp"
                  type="email"
                />
                <br />
                <label>New Password</label>
                <input
                  ref={(input) => (PasswordRef = input)}
                  placeholder="New Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <label>Confirm Password</label>
                <input
                  ref={(input) => (ConfirmPasswordRef = input)}
                  placeholder="Confirm Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <button
                  onClick={ResetPass}
                  className="btn w-100 animated fadeInUp float-end btn-info"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
