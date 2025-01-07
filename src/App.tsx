import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import Layout from "./layout/Layout";
import { useTheme } from "./ThemeContext";
import { useEffect } from "react";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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
