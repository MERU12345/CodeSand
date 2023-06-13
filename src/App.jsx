import "./styles.css";
import Export from "./Export";
import Rensyuu from "./Rensyuu";
import StateStudy from "./StateStudy";
import button from "./ui-part/button";

export default function App() {
  return (
    <div className="App">
      <Export />
      <Rensyuu />
      <StateStudy />
      <button />
    </div>
  );
}
