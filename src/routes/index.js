import express from "express";

//ROUTES
import { csvRouter } from "./csv.routes";

const mainRouter = express.Router();

mainRouter.use("/csv", csvRouter);

export { mainRouter };
