import "./style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./Nav";
import Homepage from "./Homepage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="" element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
}
