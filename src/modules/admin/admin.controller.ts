import {Body, Controller, HttpCode, HttpStatus, Param, Patch} from '@nestjs/common';

import { AdminService } from './admin.service';
import { BaseController, BaseService } from '../../commons';
import { Admin } from './entities';
import {Public} from "../../public.metadata";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('admin')
@Controller('admin')
export class AdminController extends BaseController<Admin> {
  constructor(private readonly adminService: AdminService) {
    super();
  }

  getService(): BaseService<Admin> {
    return this.adminService;
  }

  @Public()
  @Patch('/validateReset/:token')
  @HttpCode(HttpStatus.OK)
  async validateReset(@Param('token') token: string, @Body() body: { password: string }) {
    const {password} = body;
    return await this.adminService.validateAndResetPassword(token, password);
  }

}
