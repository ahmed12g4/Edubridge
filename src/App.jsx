import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./pages/Login";
import JoinUs from "./Pages/Join";


function Layout() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/join";

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Join" element={<JoinUs />} />

        {/* لو عندك صفحات تانية زودها هنا */}
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
