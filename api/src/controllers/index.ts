import Services from "@/services";
import ResponseServices from "@/services/response";
class Controllers {
  public services: Services;
  public response: ResponseServices;

  constructor() {
    this.services = new Services();
    this.response = new ResponseServices();
  }
}

export default Controllers;
