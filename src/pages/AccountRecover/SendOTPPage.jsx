import { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const SendOTP = lazy(() => import("../../components/AccountRecover/SendOTP"));

export default function SendOTPPage() {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <SendOTP />
      </Suspense>
    </Fragment>
  );
}
