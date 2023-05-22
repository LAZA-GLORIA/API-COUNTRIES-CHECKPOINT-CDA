import React from "react";
import { useOutlet } from "react-router-dom";
import PageHome from "./routes";
import Layout from "./components/Layout";

function App() {
  const outlet = useOutlet();
  return <Layout>{outlet || <PageHome />}</Layout>;
}

export default App;
