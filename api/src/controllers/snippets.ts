import { Snippets, User } from "@prisma/client";
import Controllers from ".";
import { Request, Response } from "express";

class SnippetsControllers extends Controllers {
  constructor() {
    super();

    this.getAllSnippets = this.getAllSnippets.bind(this);
    this.createSnippet = this.createSnippet.bind(this);
  }

  public async createSnippet(
    req: Request,
    res: Response
  ): Promise<Response<Snippets>> {
    const { user } = res.locals as { user: User };
    const { title, code, languageId } = req.body;
    try {
      const getLanguage = await this.services.prisma.language.findUnique({
        where: { id: languageId },
      });
      if (!getLanguage) {
        return this.response.throwError(res, "language not found", 404);
      }

      const createSnipper = await this.services.prisma.snippets.create({
        data: {
          title,
          code,
          languageId,
          userId: user.id,
        },
      });

      return this.response.success(res, createSnipper, 201);
    } catch (err: any) {
      return this.response.error(res, err.message, 500);
    }
  }

  public async getAllSnippets(
    req: Request,
    res: Response
  ): Promise<Response<Snippets[]>> {
    const { user } = res.locals as { user: User };
    try {
      const getAllSnippets = await this.services.prisma.snippets.findMany({
        where: { userId: user.id },
        include: { language: true },
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
