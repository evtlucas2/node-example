import { INewsService } from "../contracts/iNewsService";
import { Result } from "../infra/result";
import { NewsRepository } from "../repository/newsRepository";
import { News } from "../models/news";

export class NewsService implements INewsService {
	
	async get(_id: string): Promise<News> {
		let result = await NewsRepository.findById(_id);
		if (!result)
			throw new Error(`News com id ${_id} não encontrada`);
		return result;
	}

	async getAll(page: number, qtd: number): Promise<Result<News>> {
		let result = new Result<News>();
		result.Page = page;
		result.Qtd = qtd;
		result.Total = await NewsRepository.countDocuments();
		result.Data = await NewsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
		return result;
	}
}