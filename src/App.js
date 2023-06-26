import ChordProgression from "./components/ChordProgression";
import SettingsForm from "./components/SettingsForm";
import "./style.css";

function App() {
  return (
    <div className="wrapper">
      <SettingsForm
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
      <ChordProgression />
    </div>
  );
}

export default App;
