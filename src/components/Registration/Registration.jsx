import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormHelper";
import { RegistrationRequest } from "../../apiRequest/apiRequest";
import icon from "../../assets/images/image.json";

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
    let photo = icon.photo;

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
