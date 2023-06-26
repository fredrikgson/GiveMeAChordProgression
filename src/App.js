import { useState } from "react";
import ChordProgression from "./components/ChordProgression";
import SettingsForm from "./components/SettingsForm";
import "./style.css";

function App() {
  const [chordProgression, setChordProgression] = useState([]);

  return (
    <div className="wrapper">
      <SettingsForm
        setChordProgression={setChordProgression}
        defNumberOfChords={4}
        defKey="C"
        defIsMinor={false}
        defOneChord={true}
        defDimChords={false}
        defProbSeventhChords={10}
        defProbSusChords={0}
        defProbParallelKeyChords={0}
      />
      <hr />
      <ChordProgression chordProgression={chordProgression} />
    </div>
  );
}

export default App;
