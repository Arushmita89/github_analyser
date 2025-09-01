import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import RepoSearch from "./pages/RepoSearch";
import AIInsights from "./pages/AIInsights";
import CommitsChart from "./pages/CommitsChart";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/repos" element={<RepoSearch />} />
          <Route path="/insights" element={<AIInsights />} />
          <Route path="/commits" element={<CommitsChart />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
