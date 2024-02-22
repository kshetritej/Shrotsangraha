import {Column, Entity, JoinTable, ManyToMany} from "typeorm";
import Resource from "./resource.entity";
import CommonEntity from "./common.entity";


@Entity({name:"user"})
export class User extends CommonEntity{

    @Column({
        unique: true,
        name: "username",
        nullable:false,
    })
    username: string;

    @Column({unique:true,
        nullable:false,
    })
    email:string;

    @Column({
        name:"full_name",
    })
    fullName: string;

    @Column({
        nullable:false,
        select:false,
    })
    password: string;

    @ManyToMany(()=>Resource, (resource)=>resource.uploadBy)
    @JoinTable()
    resource: Resource[]
}