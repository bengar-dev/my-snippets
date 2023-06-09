import { Language, Snippets, User } from "@prisma/client";
import Controllers from ".";
import { Request, Response } from "express";
import SnippetService from "@/services/snippet";

class SnippetsControllers extends Controllers {
  private snippets: SnippetService;

  constructor() {
    super();

    this.snippets = new SnippetService();

    this.getAllSnippets = this.getAllSnippets.bind(this);
    this.createSnippet = this.createSnippet.bind(this);
    this.getAllLanguages = this.getAllLanguages.bind(this);
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

      const transformStringToMd = await this.snippets.transformStringToMarkdown(
        code,
        getLanguage.logo
      );

      const createSnippet = await this.services.prisma.snippets.create({
        data: {
          title,
          code: transformStringToMd,
          languageId,
          userId: user.id,
        },
      });

      return this.response.success(res, createSnippet, 201);
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

  public async getAllLanguages(
    req: Request,
    res: Response
  ): Promise<Response<Language>> {
    try {
      const getAllLanguages = await this.services.prisma.language.findMany();
      if (getAllLanguages.length === 0) {
        return this.response.throwError(res, "languages not found", 404);
      }

      return this.response.success(res, getAllLanguages, 200);
    } catch (err: any) {
      return this.response.error(res, err.message, 500);
    }
  }
}

export default new SnippetsControllers();
