import { Controller, Get, Req, HttpCode } from "@nestjs/common";
import { Request } from "express";
import { AppService } from "./app.service";

@Controller("home")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("info")
  @HttpCode(204)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getInfo(@Req() req: Request) {
    return this.appService.getInfo();
  }
}
