import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
