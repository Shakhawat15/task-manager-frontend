import { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
const ForgatPass = lazy(() => import("../components/ForgatPass/ForgatPass"));
export default function ForgatPassPage() {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <ForgatPass />
      </Suspense>
    </Fragment>
  );
}
