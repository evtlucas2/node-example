import { INewsService } from "../contracts/iNewsService";
import { Result } from "../infra/result";
import { NewsRepository } from "../repository/newsRepository";

export class NewsService implements INewsService {
	
	async get(_id: string): Promise<any> {
		let result = await NewsRepository.findById(_id);
		return result;
	}

	async getAll(page: number, qtd: number): Promise<Result> {
		let result = new Result();
		result.Page = page;
		result.Qtd = qtd;
		result.Total = await NewsRepository.countDocuments();
		result.Data = await NewsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
		return result;
	}
}