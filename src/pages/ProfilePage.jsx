import { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const Profile = lazy(() => import("../components/Profile/Profile"));

export default function ProfilePage() {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Profile />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
}
