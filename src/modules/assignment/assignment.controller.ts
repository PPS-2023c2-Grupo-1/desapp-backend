import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { Assignment } from './entities';
import { BaseController, BaseService } from '../../commons';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('assignment')
@Controller('assignment')
export class AssignmentController extends BaseController<Assignment> {
  constructor(private readonly assignmentService: AssignmentService) {
    super();
  }

  getService(): BaseService<Assignment> {
    return this.assignmentService;
  }

  /**
   * return total de assignments
   */
  @Get('count')
  @HttpCode(HttpStatus.OK)
  async countAllAssignments(): Promise<number> {
    return await this.assignmentService.countAllAssignments();
  }

  /**
   * statistics of assignments
   * jtpId id del jtp
   * Return todos los assignments de un jtp
   */
  @Get('statistics/:jtpId')
  @HttpCode(HttpStatus.OK)
  async AllAssignmentForJtp(@Param('jtpId') id: number): Promise<Assignment[]> {
    return this.assignmentService.AllAssignmentForJtp(id);
  }
}
