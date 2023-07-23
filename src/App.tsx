import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Join from "./pages/auth/join/Join";
import ROUTES from "./routes";
import Agree from "./pages/auth/join/Agree";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login></Login>}></Route>
        <Route path={ROUTES.AGREE} element={<Agree></Agree>}></Route>
        <Route path={ROUTES.JOIN} element={<Join></Join>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
