import "./App.css";
import { useState } from "react";
import ModalForm from "./components/ModalForm";

function App() {
  const [isOpeningModal, setIsOpeningModal] = useState(false);
  return (
    <div className="App">
      {!isOpeningModal && (
        <button onClick={() => setIsOpeningModal((prev) => !prev)}>
          Задать вопрос
        </button>
      )}
      {isOpeningModal && <ModalForm />}
    </div>
  );
}

export default App;
