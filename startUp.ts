import "reflect-metadata";

import express, { Application } from "express";

import "./shared/container";

import database from "./infra/db";

import newsRouter from "./router/newsRouter";
import galeriaRouter from "./router/galeriaRouter";
import videoRouter from "./router/videoRouter";

class StartUp {
	
	public app: Application;
	private _db: database = new database();

	constructor() {
		this.app = express();
		this._db.createConnection();
		this.routes();
	}

	routes() {
		this.app.route("/").get((req, res) => {
			res.send("versão: 0.0.1");
		});

		this.app.use("/", newsRouter);
		this.app.use("/", galeriaRouter);
		this.app.use("/", videoRouter);
	}
}

export default new StartUp();