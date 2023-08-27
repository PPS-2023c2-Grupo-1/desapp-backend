import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StudentService } from './student.service';
import { BaseController } from '../../commons';
import { Student } from './entities';
import { BaseService } from 'src/commons/service.commons';

@ApiTags('student')
@Controller('student')
export class StudentController extends BaseController<Student> {
  constructor(private readonly studentService: StudentService) {
    super();
  }

  getService(): BaseService<Student> {
    return this.studentService;
  }

  @Get('count')
  async countAll(): Promise<number> {
    return this.studentService.countAll();
  }
}
