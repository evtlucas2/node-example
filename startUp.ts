import bazinga, { Application, Request, Response } from "express";
import database from "./infra/db";
import NewsController from "./controller/newsController";

class StartUp {
	
	public app: Application;
	private _db: database = new database();

	constructor() {
		this.app = bazinga();
		this._db.createConnection();
		this.routes();
	}

	routes() {
		this.app.route("/").get((req, res) => {
			res.send("versão: 0.0.1");
		});

		this.app.route("/api/v1/news/:page/:qtd").get((req: Request, res: Response) => {
			return NewsController.get(req, res)
		});

		this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
			return NewsController.getById(req, res);
		})
	}
}

export default new StartUp();