import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import AnalyzerPage from "./pages/AnalyzerPage";
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AnalyzerPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
