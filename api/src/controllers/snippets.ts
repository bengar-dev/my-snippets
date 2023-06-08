import { Snippets, User } from "@prisma/client";
import Controllers from ".";
import { Request, Response } from "express";

class SnippetsControllers extends Controllers {
  constructor() {
    super();

    this.getAllSnippets = this.getAllSnippets.bind(this);
  }

  public async getAllSnippets(
    req: Request,
    res: Response
  ): Promise<Response<Snippets[]>> {
    const { user } = res.locals as { user: User };
    try {
      const getAllSnippets = await this.services.prisma.snippets.findMany({
        where: { userId: user.id },
      });

      if (getAllSnippets.length === 0) {
        return this.response.throwError(res, "snippets not found", 404);
      }

      return this.response.success(res, getAllSnippets, 200);
    } catch (err: any) {
      return this.response.error(res, err.message, 500);
    }
  }
}

export default new SnippetsControllers();
