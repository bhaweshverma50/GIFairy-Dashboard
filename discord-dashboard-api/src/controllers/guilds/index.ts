import { Request, Response } from "express";
import {
  getBotGuildsService,
  getUserGuildsService,
} from "../../services/guilds";
import { User } from "../../database/schemas/User";

export async function getGuildsController(req: Request, res: Response) {
  const user = req.user as User;
  try {
    const { data: botGuilds } = await getBotGuildsService();
    const { data: userGuilds } = await getUserGuildsService(user.id);
    res.send({ status: true, data: { botGuilds, userGuilds } });
  } catch (error) {
    console.log(error);
    res.send({ status: false, error });
  }
}
