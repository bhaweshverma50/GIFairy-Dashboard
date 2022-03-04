import { Request, Response } from "express";
import { getMutualGuildsService } from "../../services/guilds";
import { User } from "../../database/schemas/User";

export async function getGuildsController(req: Request, res: Response) {
  const user = req.user as User;
  try {
    const guilds = await getMutualGuildsService(user.id);
    res.send(guilds);
  } catch (error) {
    console.log(error);
    res.send({ status: false, error });
  }
}
