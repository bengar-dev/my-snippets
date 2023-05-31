import Passport from "./passport";
import express from "express";

class Config {
  public passport = Passport;
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.init();
  }

  private init(): void {
    this.router.use(this.passport.passport.initialize());
    this.router.use(this.passport.passport.session());
  }
}

export default new Config();
