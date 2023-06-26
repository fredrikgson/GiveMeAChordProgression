import { useEffect, useState } from "react";
import SettingsForm from "./components/SettingsForm";
import "./style.css";

function App() {
  const [testChords, setTestChords] = useState([]);

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setTestChords(data));
  }, []);

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
      {testChords.length > 0 ? (
        testChords.map((chord) => {
          return <p>{chord.chord}</p>;
        })
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default App;
