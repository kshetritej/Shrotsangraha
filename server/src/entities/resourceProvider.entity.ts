import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Resource from "./resource.entity";


@Entity()
export default class ResourceProvider {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({
        type:"varchar"
    })
    desc: string;

    @OneToMany(()=>Resource,(resource)=>resource.id)
    @JoinColumn()
    resource: Resource
}