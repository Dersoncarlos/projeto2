import express from "express";

import csvController from "../controllers/csv.controller";
import csvUploadMiddleware from "../middlewares/csvUpload.middleware";

const csvRouter = express.Router();

csvRouter.post("/upload", csvUploadMiddleware, csvController.uploadCsv);

export { csvRouter };
