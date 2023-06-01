import { User } from "@prisma/client";

declare module "express-session" {
  export interface SessionData {
    passport: {
      user: User;
    };
  }
}
