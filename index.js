import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";

import { mainRouter } from "./src/routes";

const app = express();
const port = 3001;

app.use(express.json(), cors(), fileUpload({ useTempFiles: true }));

app.get("/", (_, res) => {
  res.send("API CSV");
});

app.use("/api", mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
