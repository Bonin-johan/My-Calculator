import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalculator,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCalculator, faMinus, faPlus);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  // je crée un state counter dont la valeur
  //  initial est 0 et la fonction qui permettra
  //  de le mettre a jour
  //  s'appel setCounter.

  const [counter, setCounter] = useState(0);

  // const handelClickPlus = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <header>
        <h1> React Counter</h1>
      </header>

      <main>
        <section>
          <Button setCounter={setCounter} counter={counter} value={"-"} />
          <p>{counter}</p>
          <Button setCounter={setCounter} counter={counter} value={"+"} />
        </section>
        <div>
          <Button setCounter={setCounter} counter={counter} value={"reset"} />
        </div>
      </main>
      <footer> 🔥Made with React at Le Reacteur by Bonin Johan🔥</footer>
    </>
  );
}

export default App;
