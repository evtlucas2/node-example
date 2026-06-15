import { Request, Response } from "express";
import { GaleriaService } from "../services/galeriaService";

class GaleriaController {
	
	private _service: GaleriaService;

	constructor() {
		this._service = new GaleriaService();
	}

	async get(request: Request, response: Response) {
		try {
			const page = request.params.page ? parseInt(request.params.page.toString()) : 1;
			const qtd = request.params.qtd ? parseInt(request.params.qtd.toString()) : 1;
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
			const _id = request.params.id;
			let result = await this._service.get(_id.toString());
			response.status(200).json({ result });
		} catch(error) {
			if (error instanceof Error) {
				response.status(500).json({ error: error.message });
			} else {
				response.status(500).json({ error: String(error) });
			}
		}
	}
}

export default new GaleriaController();