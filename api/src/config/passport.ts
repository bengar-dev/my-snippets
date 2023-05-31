import * as dotenv from "dotenv";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";
dotenv.config();

class Passport {
  public passport = passport;

  constructor() {
    this.init();
  }

  private init(): void {
    this.passport.use(
      new GitHubStrategy(
        {
          clientID: process.env.GITHUB_CLIENT_ID || "clientId",
          clientSecret: process.env.GITHUB_SECRET || "gitHubSecret",
          callbackURL:
            process.env.GITHUB_CALLBACK_URL ||
            "http://localhost:3300/api/auth/callback",
        },
        async function (accessToken, refreshToken, profile, cb) {
          return cb(null, profile);
        }
      )
    );

    this.passport.serializeUser((user: Express.User, done) => done(null, user));
    this.passport.deserializeUser((user: Express.User, done) =>
      done(null, user)
    );
  }
}

export default new Passport();
