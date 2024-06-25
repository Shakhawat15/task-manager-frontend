import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <>
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
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/registration" element={<RegistrationPage />} />
            <Route exact path="/forgat-pass" element={<ForgatPassPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader />
      </Fragment>
    </>
  );
}

export default App;
