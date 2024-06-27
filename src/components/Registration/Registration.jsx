import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormHelper";
import { RegistrationRequest } from "../../apiRequest/apiRequest";

export default function Registration() {
  let emailRef,
    fistNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  const navigate = useNavigate();

  const onRegistration = () => {
    let email = emailRef.value;
    let firstName = fistNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;
    let photo =
      "data:image/png;base64,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";

    if (IsEmpty(firstName)) {
      ErrorToast("First Name is Required!");
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last Name is Required!");
    } else if (IsEmail(email)) {
      ErrorToast("Valid Email Address is Required!");
    } else if (!IsMobile(mobile)) {
      ErrorToast("Valid Mobile Number is Required!");
    } else if (IsEmpty(password)) {
      ErrorToast("Password is Required!");
    } else {
      RegistrationRequest(
        firstName,
        lastName,
        email,
        mobile,
        password,
        photo
      ).then((result) => {
        if (result) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6 center-screen">
          <div className="card w-90 p-4">
            <div className="card-body">
              <h5 className="text-center">Sign Up</h5>
              <br />
              <input
                ref={(input) => (fistNameRef = input)}
                type="text"
                placeholder="First Name"
                className="form-control animated fadeInUp"
              />
              <br />
              <input
                ref={(input) => (lastNameRef = input)}
                type="text"
                placeholder="Last Name"
                className="form-control animated fadeInUp"
              />
              <br />
              <input
                ref={(input) => (emailRef = input)}
                type="email"
                placeholder="User Email"
                className="form-control animated fadeInUp"
              />
              <br />
              <input
                ref={(input) => (mobileRef = input)}
                type="mobile"
                placeholder="Mobile"
                className="form-control animated fadeInUp"
              />
              <br />
              <input
                ref={(input) => (passwordRef = input)}
                type="password"
                placeholder="User Password"
                className="form-control animated fadeInUp"
              />
              <br />
              <button
                onClick={onRegistration}
                className="btn w-100 animated fadeInUp float-end btn-info"
              >
                Next
              </button>
              <div className="text-center w-100">
                <Link className="text-center animated fadeInUp" to="/login">
                  Sign In
                </Link>
                <br />
                <Link
                  className="text-center animated fadeInUp"
                  to="/forgat-pass"
                >
                  Forget Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
