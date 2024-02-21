import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Resource from "./resource.entity";

@Entity()
export default class ResourceField{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        unique:true,
        nullable:false
    })
    name: string;

    @ManyToMany(()=>Resource,(resource)=>resource.id)
    @JoinColumn()
    resource:Resource[]
}