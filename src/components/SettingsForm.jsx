import { useState } from "react";
import BasicSettings from "./BasicSettings";
import AdvancedSettings from "./AdvancedSettings";

const SettingsForm = ({
  setChordProgression,
  defNumberOfChords,
  defKey,
  defIsMinor,
  defOneChord,
  defDimChords,
  defProbSeventhChords,
  defProbSusChords,
  defProbParallelKeyChords,
}) => {
  // basic settings hooks
  const [numberOfChords, setNumberOfChords] = useState(defNumberOfChords);
  const [key, setKey] = useState(defKey);
  const [isMinor, setIsMinor] = useState(defIsMinor);

  // advanced settings
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  // advanced settings hooks
  const [forceOneChord, setForceOneChord] = useState(defOneChord);
  const [dimChords, setDimChords] = useState(defDimChords);
  const [probSeventhChords, setProbSeventhChords] =
    useState(defProbSeventhChords);
  const [probSusChords, setProbSusChords] = useState(defProbSusChords);
  const [probParallelKeyChords, setProbParallelKeyChords] = useState(
    defProbParallelKeyChords
  );

  const getChordProgression = () => {
    fetch(
      "api/chord-progression?" +
        new URLSearchParams({
          number: numberOfChords,
          key: key.replace("#", "sharp"),
          isMinor: isMinor,
          forceOneChord: forceOneChord,
          dimChords: dimChords,
          probSeventhChords: probSeventhChords,
          probSusChords: probSusChords,
          probParallelKeyChords: probParallelKeyChords,
        })
    )
      .then((res) => res.json())
      .then((data) => setChordProgression(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getChordProgression();
  };

  return (
    <form className="generate-form" onSubmit={handleSubmit}>
      <button id="form-submit-button">Give me a chord progression!</button>
      <BasicSettings
        numberOfChords={numberOfChords}
        isMinor={isMinor}
        setNumberOfChords={setNumberOfChords}
        setKey={setKey}
        setIsMinor={setIsMinor}
      />
      <div id="advanced-settings-button">
        <input
          id="toggle-advanced-settings"
          type="checkbox"
          checked={showAdvancedSettings}
          onChange={(e) => {
            setShowAdvancedSettings(e.target.checked);
          }}
        ></input>
        <label htmlFor="toggle-advanced-settings">Advanced settings</label>
      </div>
      {showAdvancedSettings ? (
        <AdvancedSettings
          forceOneChord={forceOneChord}
          dimChords={dimChords}
          probSeventhChords={probSeventhChords}
          probSusChords={probSusChords}
          probParallelKeyChords={probParallelKeyChords}
          setForceOneChord={setForceOneChord}
          setDimChords={setDimChords}
          setProbSeventhChords={setProbSeventhChords}
          setProbSusChords={setProbSusChords}
          setProbParallelKeyChords={setProbParallelKeyChords}
          isMinor={isMinor} // for responsive I/i
        />
      ) : (
        <p id="empty-p"></p>
      )}
    </form>
  );
};
export default SettingsForm;
