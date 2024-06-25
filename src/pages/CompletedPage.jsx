import { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const Completed = lazy(() => import("../components/Completed/Completed"));

export default function CompletedPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Completed />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
}
