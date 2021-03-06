import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/discord", passport.authenticate("discord"), (req, res) => {
  res.send(200);
});

router.get(
  "/discord/redirect",
  passport.authenticate("discord"),
  (req, res) => {
    res.send({ status: true, message: "Successfully logged in" });
  }
);

router.get("/status", (req, res) => {
  return req.user
    ? res.send({ status: true, message: req.user })
    : res.send({ status: false, message: "unautharized" });
});

export default router;
