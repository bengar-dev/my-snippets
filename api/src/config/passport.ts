import * as dotenv from "dotenv";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";
import { PrismaClient } from "@prisma/client";
dotenv.config();

class Passport {
  public passport = passport;

  constructor() {
    this.init();
  }

  private init(): void {
    const prisma = new PrismaClient();

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
          const getUser = await prisma.user.findUnique({
            where: { githubId: profile.id },
          });

          if (!getUser) {
            await prisma.user.create({
              data: {
                githubId: profile.id,
                username: profile.username,
                displayName: profile.displayName,
                profileUrl: profile.profileUrl,
                avatarUrl: profile.photos![0].value,
                accessToken,
              },
            });
          } else {
            await prisma.user.update({
              where: { githubId: profile.id },
              data: {
                githubId: profile.id,
                username: profile.username,
                displayName: profile.displayName,
                profileUrl: profile.profileUrl,
                avatarUrl: profile.photos![0].value,
                accessToken,
              },
            });
          }

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
