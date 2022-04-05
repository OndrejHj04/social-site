import Homepage from "./Homepage";
import CreateAccount from "./CreateAccount";
import LostPassword from "./LostPassword";
import ResetPassword from "./ResetPassword";
import ScrollPage from "./ScrollPage";
import Nav from "./Nav";
import Profile from "./Profile";
import Settings from "./Settings";

import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Nav />}>
            <Route path="" element={<Homepage />} />
            <Route path="guest/CreateAccount" element={<CreateAccount  />} />
            <Route path="guest/ForgottenPassword" element={<LostPassword />} />
            <Route path="guest/ForgottenPassword/reset" element={<ResetPassword />} />
            <Route path="user/ScrollPage" element={<ScrollPage />} />
            <Route path="user/Profile" element={<Profile />} />
            <Route path="user/Settings" element={<Settings />} />
            <Route path="*" element={<Homepage />} />
          </Route>
        </Routes>
      </Router>
      
    </>
  );
}
