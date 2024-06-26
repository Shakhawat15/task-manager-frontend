import { useRef } from "react";
import { Link } from "react-router-dom";
import { LoginRequest } from "../../apiRequest/apiRequest";
import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormHelper";

export default function Login() {
  let passRef,
    emailRef = useRef();

  // const navigate = useNavigate();

  const SubmitLogin = async () => {
    let email = emailRef.value;
    let password = passRef.value;

    if (IsEmail(email)) {
      ErrorToast("Valid Email Address is Required!");
    } else if (IsEmpty(password)) {
      ErrorToast("Password is Required!");
    } else {
      await LoginRequest(email, password).then((result) => {
        if (result) {
          // navigate("/");
          // window.location.reload();
          window.location.href = "/";
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
              <h5 className="text-center">Sign In</h5>
              <br />
              <input
                ref={(input) => (emailRef = input)}
                type="email"
                placeholder="User Email"
                className="form-control animated fadeInUp"
              />
              <br />
              <input
                ref={(input) => (passRef = input)}
                type="password"
                placeholder="User Password"
                className="form-control animated fadeInUp"
              />
              <br />
              <button
                onClick={SubmitLogin}
                className="btn w-100 animated fadeInUp float-end btn-info"
              >
                Next
              </button>
              <div className="text-center w-100">
                <Link
                  className="text-center animated fadeInUp"
                  to="/registration"
                >
                  Sign Up
                </Link>
                <br />
                <Link className="text-center animated fadeInUp" to="/send-otp">
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
