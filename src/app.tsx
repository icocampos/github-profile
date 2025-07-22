import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/profile";
import InfoPage from "./pages/repo-info";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/repo-info/:owner/:repo" element={<InfoPage />} />
    </Routes>
  );
}

export default App;
