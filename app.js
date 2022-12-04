const express = require("express");

const db = require("./controllers/memberController");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/member", async (req, res) => {
  const MEMBERS = await db.getAllMembers();
  res.render("member", { MEMBERS });
});

app.listen(PORT, () => {
  console.log(`서버는 ${PORT} 번에서 실행중`);
});
