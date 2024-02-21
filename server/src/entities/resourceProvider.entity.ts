import { Column, Entity, JoinColumn, OneToMany} from "typeorm";
import Resource from "./resource.entity";
import CommonEntity from "./common.entity";


@Entity()
export default class ResourceProvider extends CommonEntity{

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