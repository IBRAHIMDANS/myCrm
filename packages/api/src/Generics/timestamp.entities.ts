import { Exclude } from "class-transformer";
import {
  BaseEntity,
  BeforeInsert,
  BeforeRemove,
  BeforeUpdate, Column,
  CreateDateColumn,
  DeleteDateColumn, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";


export class TimestampEntities extends BaseEntity {

  @Column({ unique: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Exclude()
  @CreateDateColumn({ name: "created_at", type: "timestamp", update: false })
  createdAt?: Date;

  @Exclude()
  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt?: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp" })
  deletedAt?: Date;

  @BeforeInsert()
  createDates() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  updateDates() {
    this.updatedAt = new Date();
  }

  @BeforeRemove()
  deletedDate() {
    this.deletedAt = new Date();
  }

}
