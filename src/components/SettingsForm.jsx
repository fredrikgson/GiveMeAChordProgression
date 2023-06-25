import { useState } from "react";
import BasicSettings from "./BasicSettings";

const SettingsForm = ({defNumberOfChords, defKey, defIsMinor}) => {

    // basic settings hooks
    const [numberOfChords, setNumberOfChords] = useState(defNumberOfChords);
    const [key, setKey] = useState(defKey);
    const [isMinor, setIsMinor] = useState(defIsMinor);

    // advanced settings hooks
    const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Send request for " + numberOfChords + " chords in the key of "+ key +". Minor: " + isMinor);
    }

    return (
        <form
        className="generate-form"
        onSubmit={handleSubmit}
      >
        <button id="form-submit-button">Give me a chord progression</button>
        <BasicSettings 
        numberOfChords={numberOfChords}
        isMinor={isMinor}
        setNumberOfChords={setNumberOfChords}
        setKey={setKey}
        setIsMinor={setIsMinor}
        />
        <input 
        id="toggle-advanced-settings" 
        type="checkbox" 
        checked={showAdvancedSettings} 
        onChange={(e) => {setShowAdvancedSettings(e.target.checked)}}>
        </input>
        <label htmlFor="toggle-advanced-settings">Advanced settings</label>
        {showAdvancedSettings 
        ? 
        <p>These are the advanced settings.</p> 
        : 
        <p></p>
        }
      </form>
    );
}
export default SettingsForm;