import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import Resource from "./resource.entity";


@Entity({name:"user"})
export class User extends BaseEntity{
    @PrimaryGeneratedColumn("uuid",{
        name:"user_id"
    })
    id: string;

    @Column({
        unique: true,
        name: "username",
        nullable:false,
    })
    username: string;

    @Column({
        name:"full_name",
    })
    fullName: string;

    @Column({
        nullable:false,
    })
    password: string;

    @Column()
    status: boolean;

    @Column({
        type:"timestamptz",
        name:"created_at"
    })
    createdAt: Timestamp;

    @ManyToMany(()=>Resource, (resource)=>resource.uploadBy)
    @JoinTable()
    resource: Resource[]
}