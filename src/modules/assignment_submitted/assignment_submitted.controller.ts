import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AssignmentSubmittedService } from './assignment_submitted.service';
import { BaseController, BaseService } from '../../commons';
import { AssignmentSubmitted } from './entities';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('assignment_submitted')
@Controller('assignment_submitted')
export class AssignmentSubmittedController extends BaseController<AssignmentSubmitted> {
  constructor(
    private readonly assignmentSubmittedService: AssignmentSubmittedService,
  ) {
    super();
  }

  getService(): BaseService<AssignmentSubmitted> {
    return this.assignmentSubmittedService;
  }

  @Get('count')
  @HttpCode(HttpStatus.OK)
  async countAllAssignmentSubmitted(): Promise<number> {
    return await this.assignmentSubmittedService.countAllAssignmentSubmitted();
  }
}
