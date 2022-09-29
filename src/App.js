import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ProfilePage } from "./pages/Profile";
import { NewsPage } from "./pages/News";
import { NewsDetailPage } from "./pages/NewsDetail";
import { NotFound } from "./pages/NotFound";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:newsId" element={<NewsDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
