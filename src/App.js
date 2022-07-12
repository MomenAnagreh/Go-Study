import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import TopMenu from "./Components/TopMenu/TopMenu";
import Search from "./Components/Search/Search";
import Universities from "./APIs/Universities/Universities";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "whitesmoke",
        height: "auto",
      }}
    >
      <BrowserRouter>
        <TopMenu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Universities />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
