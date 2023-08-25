import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';

import {
  AdminModule,
  Assignment,
  AssignmentModule,
  Course,
  CourseModule,
  Jtp,
  JtpModule,
  Student,
  StudentModule,
} from './modules';

import { TYPEORM_CONFIG } from './config';

import databaseConfig from './config/database.config';
//import { AuthModule, JwtAuthGuard } from './auth';
//import { AppController } from './app.controller';
//import { APP_GUARD } from '@nestjs/core';
import { AssignmentSubmittedModule } from './modules/assignment_submitted/assignment_submitted.module';
import { EvaluationsModule } from './modules';
import { MailModule } from './modules/mail';
import { PasswordResetModule } from './modules/passwordReset/passwordReset.module';
import { Admin } from './modules/admin/entities/admin.entity';
import { AssignmentSubmitted } from './modules/assignment_submitted/entities/assigment_submitted.entity';
import { Evaluation } from './modules/evaluations/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // parámetros de conexión a la BD
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'desapp',
      password: '123',
      database: 'db_disenio',
      // seteos generales de TypeORM
      synchronize: true, // para que cada cambio en los entities se refleje en la estructura de la BD
      logging: true,
      // entidades que conforman el modelo persistente
      entities: [
        Admin,
        Assignment,
        AssignmentSubmitted,
        Course,
        Evaluation,
        Jtp,
        Student,
      ],
      // recomendada para usar con NestJS por lo menos en desarrollo
      keepConnectionAlive: true, // para que funcione el hot reload
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: [`.env`, `.env.development`, `.env.${process.env.NODE_ENV}`],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'testing')
          .default('development'),
      }),
    }),
    JtpModule,
    StudentModule,
    AssignmentModule,
    AdminModule,
    CourseModule,

    /*AuthModule*/ AssignmentSubmittedModule,
    EvaluationsModule,
    MailModule,
    PasswordResetModule,
  ],
  controllers: [],
  /*providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],*/
})
export class AppModule {}
