import Services from "@/services";
class Controllers {
  public services: Services;

  constructor() {
    this.services = new Services();
  }
}

export default Controllers;
