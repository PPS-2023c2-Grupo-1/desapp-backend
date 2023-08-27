import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseService } from './course.service';
import { BaseController, BaseService } from '../../commons';
import { Course } from './entities';

@ApiTags('course')
@Controller('course')
export class CourseController extends BaseController<Course> {
  constructor(private readonly courseService: CourseService) {
    super();
  }

  getService(): BaseService<Course> {
    return this.courseService;
  }
}
