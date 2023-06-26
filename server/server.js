const scale = require("music-scale");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server started on port " + PORT));
app.use(express.static("build"));

const progression = [
  {
    chord: "Gm",
    relative_name: "i",
    notes: ["G", "Bb", "D"],
  },
  {
    chord: "Dm",
    relative_name: "v",
    notes: ["D", "F", "A"],
  },
];

app.get("/api/test", (req, res) => {
  res.send(progression);
});

app.get("/api/all-keys", (req, res) => {
  res.send(JSON.stringify(scale("1 1# 2 2# 3 4 4# 5 5# 6 6# 7", "C")));
});
