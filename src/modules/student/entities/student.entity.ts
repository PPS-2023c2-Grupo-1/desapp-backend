import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../../commons';
import { Course } from '../../course';

@Entity('estudiante')
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'estudiante_id' })
  id: number;

  @Column({ name: 'nombre' })
  name: string;

  @Column({ name: 'apellido' })
  lastName: string;

  @Column({ name: 'mail' })
  email: string;

  @Column({ name: 'clave', type: 'varchar', length: 255 })
  password: string;

  @Column({ name: 'celular' })
  phone: string;

  @Column({ name: 'dni' })
  dni: string;

  @Column({ name: 'fecha_nacimiento', type: 'date' })
  birthDate: Date;

  @ManyToOne(() => Course, (course) => course, {
    eager: true,
  })
  @JoinColumn({ name: 'materia_cursada' })
  materia_cursada: Course;

  @Column()
  fecha_cambio_materia_cursada: Date;

  @ManyToOne(() => Course, (course) => course, {
    eager: true,
  })
  @JoinColumn({ name: 'materia_padre_cursada' })
  materia_padre_cursada: Course;

  @Column()
  comision: number;

  @Column({ type: 'smallint' })
  rondina: number;

  @Column({ name: 'sobre_mi', type: 'text' })
  about: string;

  @Column({ name: 'imagen' })
  picture: string;

  @Column({ type: 'varchar', length: 245 })
  materia2: string;

  @Column({ type: 'smallint' })
  habilitado: number;
}
