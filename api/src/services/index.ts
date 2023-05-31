import { PrismaClient } from "@prisma/client";
import JwtServices from "./jwt";

class Services {
  public prisma = new PrismaClient();
  public jwt = new JwtServices();

  constructor() {}
}

export default Services;
