import { Result } from "../infra/result";

export interface INewsService {
	get(id: string): Promise<any>;
	getAll(page: number, qtd: number): Promise<Result>;
}