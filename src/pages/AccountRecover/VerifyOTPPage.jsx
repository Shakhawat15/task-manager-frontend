import { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const VerifyOTP = lazy(() =>
  import("../../components/AccountRecover/VerifyOTP")
);

export default function VerifyOTPPage() {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <VerifyOTP />
      </Suspense>
    </Fragment>
  );
}
