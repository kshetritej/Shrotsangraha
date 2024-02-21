import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity()
export class User{
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
}