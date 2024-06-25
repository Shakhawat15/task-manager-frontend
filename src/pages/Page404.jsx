import { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const NotFound = lazy(() => import("../components/NotFound/NotFound"));

export default function Page404() {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <NotFound />
      </Suspense>
    </Fragment>
  );
}
