import { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const Canceled = lazy(() => import("../components/Canceled/Canceled"));

export default function CanceledPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Canceled />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
}
