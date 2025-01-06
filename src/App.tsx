import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="country/:name" element={<CountryDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
