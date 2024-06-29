import { Fragment, useRef } from "react";
import { ErrorToast, IsEmail } from "../../helper/FormHelper";
import { verifyEmailRequest } from "../../apiRequest/apiRequest";
import { useNavigate } from "react-router-dom";

export default function SendOTP() {
  let emailRef = useRef();

  const navigate = useNavigate();

  const verifyEmail = () => {
    const email = emailRef.value;

    if (IsEmail(email)) {
      ErrorToast("Valid Email Address is Required!");
    } else {
      verifyEmailRequest(email).then((result) => {
        if (result) {
          navigate("/verify-otp");
          //   window.location.href = "/verify-otp";
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
              <h4>EMAIL ADDRESS</h4>
              <br />
              <label>Your email address</label>
              <input
                ref={(input) => (emailRef = input)}
                type="email"
                className="form-control animated fadeInUp"
                placeholder="User Email"
              />
              <br />
              <button
                onClick={verifyEmail}
                className="btn w-100 animated fadeInUp float-end btn-info"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
