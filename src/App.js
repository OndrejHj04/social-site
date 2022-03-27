import Homepage from "./Homepage";
import CreateAccount from "./CreateAccount";
import LostPassword from "./LostPassword";

import "./style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/ForgottenPassword" element={<LostPassword />} />
        </Routes>
      </Router>
    </>
  );
}
