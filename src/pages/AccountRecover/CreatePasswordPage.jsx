import { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const CreatePassword = lazy(() =>
  import("../../components/AccountRecover/CreatePassword")
);

export default function CreatePasswordPage() {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <CreatePassword />
      </Suspense>
    </Fragment>
  );
}
