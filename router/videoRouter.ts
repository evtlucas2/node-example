import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { VideoController } from "../controller/videoController";

const videoRouter = express();
const video = container.resolve(VideoController);

videoRouter.route("/api/v1/video/:page/:qtd").get((req: Request, res: Response) => {
	return this.video.get(req, res)
});

videoRouter.route("/api/v1/video/:id").get((req: Request, res: Response) => {
	return this.video.getById(req, res);
});

export default videoRouter;