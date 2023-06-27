const scale = require("music-scale");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server started on port " + PORT));
app.use(express.static("build"));

app.get("/api/all-keys", (req, res) => {
  res.send(JSON.stringify(scale("1 1# 2 2# 3 4 4# 5 5# 6 6# 7", "C")));
});

const dummyChords = [
  {
    chord: "C#",
    isMinor: true,
    relative: "i",
    notes: ["C#", "E", "G#"],
  },
  {
    chord: "E",
    isMinor: false,
    relative: "III",
    notes: ["E", "G#", "B"],
  },
];

app.get("/api/chord-progression", (req, res) => {
  // fortsätt här, requesten innehåller allt nu
  // läs med req.query.{key}

  res.send(JSON.stringify(dummyChords));
});
