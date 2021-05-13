import express, { response } from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "hello guy!" });
});

let port = 3333;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
