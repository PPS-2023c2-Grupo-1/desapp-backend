import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../commons';
import { Evaluation } from './entities';
import { EvaluationsService } from './evaluations.service';
import { Student } from '../student';

@ApiTags('evaluation')
@Controller('evaluation')
export class EvaluationsController extends BaseController<Evaluation> {
  constructor(private readonly evaluationsService: EvaluationsService) {
    super();
  }

  getService(): EvaluationsService {
    return this.evaluationsService;
  }

  @Get('/:id/student')
  @HttpCode(HttpStatus.OK)
  async getStudentEval(@Param('id') id: number): Promise<Student> {
    const evaluation: Evaluation = await this.getService().findOne(id);
    return evaluation.student;
  }

  @Get('/jtp/:id')
  @HttpCode(HttpStatus.OK)
  async findEvaluationsByJtpId(@Param('id') id: number): Promise<Evaluation[]> {
    return this.getService().findEvaluationsForJtp(id);
  }

  @Get('/student/:id')
  @HttpCode(HttpStatus.OK)
  async findEvaluationsById(@Param('id') id: number): Promise<Evaluation[]> {
    return this.getService().findEvaluationsForStudent(id);
  }

  @Get('/course/:id')
  @HttpCode(HttpStatus.OK)
  async findEvaluationsForCourse(
    @Param('id') id: number,
  ): Promise<Evaluation[]> {
    return this.getService().findEvaluationsForCourse(id);
  }
}
