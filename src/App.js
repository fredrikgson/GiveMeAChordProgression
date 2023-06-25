import SettingsForm from "./components/SettingsForm";

function App() {
  return (
    <div className="wrapper">
      <h1>Hello, world!</h1>
      <SettingsForm defNumberOfChords={4} defKey="C" defIsMinor={false} />
      <hr />
    </div>
  );
}

export default App;
