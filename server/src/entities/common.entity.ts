import { BaseEntity, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class CommonEntity extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn({default:Date})
    createdAt: Date;


    @DeleteDateColumn({default:Date})
    deletedAt: Date;
}