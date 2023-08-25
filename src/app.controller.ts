import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService, LocalAuthGuard } from './auth';
import { Public } from './public.metadata';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Get('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
