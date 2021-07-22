import { Exclude } from "class-transformer";
import {
  BaseEntity,
  BeforeInsert,
  BeforeRemove,
  BeforeUpdate,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn
} from "typeorm";


export class TimestampEntities extends BaseEntity {

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

  // @AfterLoad()
  // updateCounters() {
  //   console.log('loader loader');
  // TODO create subscribers qui check if document is delete after 1 month and hard remove
  //   console.log(body);
  // }
}
