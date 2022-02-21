import { config } from "dotenv";
config();
import express, { Express } from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import routes from "../routes";
require("../strategies/discord");

export function createApp(): Express {
  const app = express();
  // Enables parsing middlewares for Requests
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Enables CORS
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );

  app.use(
    session({
      secret: "jkGFD76vHJGV76876VGVcvsahhgafs67521jkhj",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 * 60 * 24 },
    })
  );

  // Enables Passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api", routes);
  return app;
}
