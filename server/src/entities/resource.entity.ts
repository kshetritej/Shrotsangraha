import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from "./user.entity";
import ResourceProvider from "./resourceProvider.entity";
import ResourceField from "./resourceField.entity";

@Entity()
export default class Resource{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    resourceTitle: string;

    @Column()
    resourceLink: string;

    @Column()
    resourceDesc: string;

    @Column()
    createdAt: "timestamp";

    @ManyToOne(()=>ResourceProvider,(provider)=>provider.id)
    @JoinColumn()
    resourceProvider: ResourceProvider;

    @Column()
    resourceType: string;

    @ManyToMany(()=>ResourceField,(field)=>field.name)
    @JoinColumn()
    field: ResourceField[]

    @ManyToMany(()=> User, (user)=> user.resource)
    @JoinTable()
    uploadBy:User

    
}