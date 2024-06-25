import { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const New = lazy(() => import("../components/New/New"));

export default function NewPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <New />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
}
