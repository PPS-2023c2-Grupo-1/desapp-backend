import {Body, Controller, HttpCode, HttpStatus, Param, Patch} from '@nestjs/common';
import {JtpService} from './jtp.service';
import {BaseController} from '../../commons';
import {Jtp} from './entities';
import {Public} from "../../public.metadata";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('jtp')
@Controller('jtp')
export class JtpController extends BaseController<Jtp> {
  constructor(private readonly jtpService: JtpService) {
    super();
  }

  getService(): JtpService {
    return this.jtpService;
  }

  @Public()
  @Patch('/validateReset/:token')
  @HttpCode(HttpStatus.OK)
  async validateReset(@Param('token') token: string, @Body() body: { password: string }) {
    const {password} = body;
    return await this.jtpService.validateAndResetPassword(token, password);
  }
}
