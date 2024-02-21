import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import ResourceProvider from "./resourceProvider.entity";
import ResourceField from "./resourceField.entity";
import CommonEntity from "./common.entity";

@Entity()
export default class Resource extends CommonEntity{

    @Column()
    resourceTitle: string;

    @Column()
    resourceLink: string;

    @Column()
    resourceDesc: string;

    @Column()
    resourceType: string;


    @ManyToOne(()=>ResourceProvider,(provider)=>provider.id)
    @JoinColumn()
    resourceProvider: ResourceProvider;

    @ManyToMany(()=>ResourceField,(field)=>field.name)
    @JoinColumn()
    field: ResourceField[]

    @ManyToMany(()=> User, (user)=> user.resource)
    @JoinTable()
    uploadBy:User

    
}