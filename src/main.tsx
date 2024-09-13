import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Test from "./pages/Test.tsx";
import LandingPage from "./pages/Landing/index.tsx";
import Kanban from "./pages/Kanban/index.tsx";
import Notion from "./pages/Notion/index.tsx";

const Routers = () => (
  <Router>
    {/* <NavBar /> */}
    <Routes>
      <Route element={<LandingPage />} path={"/"} />
      <Route element={<App />} path={"/app"} />
      <Route element={<Test />} path={"/home"} />
      <Route element={<Kanban />} path="/kanban" />
      <Route element={<Notion />} path="notion" />
      <Route
        element={
          <div className="flex h-full justify-center items-center text-4xl">
            404 NOT FOUND
          </div>
        }
        path="/*"
      />
    </Routes>
    {/* <Footer / > */}
  </Router>
);

createRoot(document.getElementById("root")!).render(<Routers />);
