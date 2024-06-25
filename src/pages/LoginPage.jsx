import { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const Login = lazy(() => import("../components/Login/Login"));

export default function LoginPage() {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Login />
      </Suspense>
    </Fragment>
  );
}
