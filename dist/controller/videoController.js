"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const videosService_1 = require("../services/videosService");
class VideoController {
    constructor() {
        this._service = new videosService_1.VideosService();
    }
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = request.params.page ? parseInt(request.params.page.toString()) : 1;
                const qtd = request.params.qtd ? parseInt(request.params.qtd.toString()) : 1;
                let result = yield this._service.getAll(page, qtd);
                response.status(200).json({ result });
            }
            catch (error) {
                if (error instanceof Error) {
                    response.status(500).json({ error: error.message });
                }
                else {
                    response.status(500).json({ error: String(error) });
                }
            }
        });
    }
    getById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = request.params.id;
                let result = yield this._service.get(_id.toString());
            }
            catch (error) {
                if (error instanceof Error) {
                    response.status(500).json({ error: error.message });
                }
                else {
                    response.status(500).json({ error: String(error) });
                }
            }
        });
    }
}
exports.default = new VideoController();
