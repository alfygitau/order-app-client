import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout";
import Landing from "./pages/Dashboard/Landing";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
