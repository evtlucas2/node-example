import { NewsService } from "../services/newsService";
import { Request, Response } from "express";

class NewsController {
	
	private _service: NewsService;

	constructor() {
		this._service = new NewsService();
	}

	async get(request: Request, response: Response) {
		try {
			const page = request.params.page ? parseInt(request.params.page.toString()) : 1;
			const qtd = request.params.qtd ? parseInt(request.params.qtd.toString()) : 10;
			let result = await this._service.getAll(page, qtd);
			response.status(200).json({ result });
		} catch (error) {
			if (error instanceof Error) {
				response.status(500).json({ error: error.message });
			} else {
				response.status(500).json({ error: String(error) });
			}
		}
	}

	async getById(request: Request, response: Response) {
		try {
			const _id = request.params.id.toString();
			let result = await this._service.get(_id);
			response.status(200).json({ result });
		} catch (error) {
			if (error instanceof Error) {
				response.status(500).json({ error: error.message });
			} else {
				response.status(500).json({ error: String(error) });
			}
		}
	}
}

export default new NewsController();