import { Router } from "express";

class SnippetsRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init(): void {
    this.router.get("/", (req, res) => {
      res.send("Hello World");
    });
  }
}

export default new SnippetsRoutes().router;
