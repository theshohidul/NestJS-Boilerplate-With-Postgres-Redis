import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Catalog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  packTitle: string;

  @Column()
  packDescription: string;

  @Column({ default: true })
  isActive: boolean;
}