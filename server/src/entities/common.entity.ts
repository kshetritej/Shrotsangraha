import { BaseEntity, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export default class CommonEntity extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn({default: Timestamp})
    createdAt: string;


    @DeleteDateColumn({default:Timestamp})
    deletedAt: string;
}