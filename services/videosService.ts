import { IVideosService } from "../contracts/iVideosService";
import { Result } from "../infra/result";
import { Videos } from "../models/videos";
import { VideosRepository } from "../repository/videosRepository";

export class VideosService implements IVideosService {

	async get(_id: string): Promise<Videos> {
		let result = await VideosRepository.findById(_id);
		if (!result)
			throw new Error(`Vídeo com id ${_id} não encontrada`);
		return result;
	}

	async getAll(page: number, qtd: number): Promise<Result<Videos>> {
		let result = new Result<Videos>();
		result.Page = page;
		result.Qtd = qtd;
		result.Total = await VideosRepository.countDocuments();
		result.Data = await VideosRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
		return result;
	}
}