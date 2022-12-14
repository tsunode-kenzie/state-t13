import { useState } from "react";

import Counter from "./components/Counter";
import Profiles from "./components/Profiles";
import Register from "./components/Register";

import "./App.css";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  return (
    <div className="App">
      <h1>Teste</h1>

      <Register setProfiles={setProfiles} />
      <Profiles profiles={profiles} />

      <Counter />
    </div>
  );
};

export default App;
