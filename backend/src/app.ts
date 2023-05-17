import { NODE_ENV } from "./config/env";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./router";

const app = express();

app.use(express.json());
app.use(cors());

if (NODE_ENV == "development") {
	app.use(morgan("dev"));
}

app.use(router);

export default app;
