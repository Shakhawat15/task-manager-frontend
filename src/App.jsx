import { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Pages
import DashboardPage from "./pages/DashboardPage";
import CreatePage from "./pages/CreatePage";
import NewPage from "./pages/NewPage";
import ProgressPage from "./pages/ProgressPage";
import CompletedPage from "./pages/CompletedPage";
import CanceledPage from "./pages/CanceledPage";
import ProfilePage from "./pages/ProfilePage";
import Page404 from "./pages/Page404";
import FullscreenLoader from "./components/MasterLayout/FullscreenLoader";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ForgatPassPage from "./pages/ForgatPassPage";
import { getToken } from "./helper/SessionHelper";
import SendOTPPage from "./pages/AccountRecover/SendOTPPage";
import VerifyOTPPage from "./pages/AccountRecover/VerifyOTPPage";
import CreatePasswordPage from "./pages/AccountRecover/CreatePasswordPage";

function App() {
  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route exact path="/create" element={<CreatePage />} />
            <Route exact path="/all" element={<NewPage />} />
            <Route exact path="/progress" element={<ProgressPage />} />
            <Route exact path="/completed" element={<CompletedPage />} />
            <Route exact path="/canceled" element={<CanceledPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/registration" element={<RegistrationPage />} />
            <Route exact path="/forgat-pass" element={<ForgatPassPage />} />
            <Route exact path="/send-otp" element={<SendOTPPage />} />
            <Route exact path="/verify-otp" element={<VerifyOTPPage />} />
            <Route
              exact
              path="/create-password"
              element={<CreatePasswordPage />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader />
      </Fragment>
    );
  }
}

export default App;
