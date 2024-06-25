import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6 center-screen">
          <div className="card w-90 p-4">
            <div className="card-body">
              <h5 className="text-center">Sign In</h5>
              <br />
              <input
                type="email"
                placeholder="User Email"
                className="form-control animated fadeInUp"
              />
              <br />
              <input
                type="password"
                placeholder="User Password"
                className="form-control animated fadeInUp"
              />
              <br />
              <button className="btn w-100 animated fadeInUp float-end btn-info">
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
