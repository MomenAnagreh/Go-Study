import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import TopMenu from "./Components/TopMenu/TopMenu";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "whitesmoke",
      }}
    >
      <TopMenu />
      <HomePage />
    </div>
  );
}

export default App;
