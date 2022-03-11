import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "If you see this message, the service has been successfully started!";
  }

  getInfo() {
    return {
      user: "tom",
      age: 18,
      gender: "male",
    };
  }
}
