import { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const Progress = lazy(() => import("../components/Progress/Progress"));

export default function ProgressPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Progress />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
}
