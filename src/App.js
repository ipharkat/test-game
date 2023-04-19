import "./styles.css";
import Pacman from "pacman-react";
import { render } from "react-dom";

export default function App() {
  return (
    <div className="App">
      <Pacman onEnd={() => location.reload()} />
    </div>
  );
}
