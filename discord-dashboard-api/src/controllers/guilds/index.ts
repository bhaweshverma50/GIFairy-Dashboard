import { Request, Response } from "express";
import { getBotGuildsService } from "../../services/guilds";

export async function getGuildsController(req: Request, res: Response) {
  try {
    const { data } = await getBotGuildsService();
    res.send({ status: true, data });
  } catch (error) {
    console.log(error);
    res.send({ status: false, error });
  }
}
