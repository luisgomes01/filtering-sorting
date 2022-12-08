import BasicList from "./components/List/BasicList";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { Divider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Menu />
      <Divider />
      <BasicList />
    </div>
  );
}

export default App;
