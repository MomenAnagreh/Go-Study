import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import TopMenu from "./Components/TopMenu/TopMenu";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "whitesmoke",
      }}
    >
      <BrowserRouter>
        <TopMenu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
