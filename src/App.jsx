import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

// Pages
import Login from "./pages/Login";
import JoinUs from "./pages/Join";

function Layout() {
  const location = useLocation();

  // إخفاء الهيدر والفوتر في صفحات معينة
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/join";

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<JoinUs />} />
        {/* ضيف أي صفحة جديدة هنا */}
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
