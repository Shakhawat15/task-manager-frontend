import { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const Registration = lazy(() =>
  import("../components/Registration/Registration")
);

export default function RegistrationPage() {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Registration />
      </Suspense>
    </Fragment>
  );
}
