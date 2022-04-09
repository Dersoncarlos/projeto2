import express from "express";
import fileUpload from "express-fileupload";

import { mainRouter } from "./src/routes";

const app = express();
const port = 3000;

app.use(fileUpload());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use("/api", mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
