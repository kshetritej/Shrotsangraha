import { Column, Entity, JoinColumn, ManyToMany} from "typeorm";
import Resource from "./resource.entity";
import CommonEntity from "./common.entity";

@Entity()
export default class ResourceField extends CommonEntity{

    @Column({
        unique:true,
        nullable:false
    })
    name: string;

    @ManyToMany(()=>Resource,(resource)=>resource.id)
    @JoinColumn()
    resource:Resource[]
}