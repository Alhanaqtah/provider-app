import { Region } from "src/regions/regions.model";
import { Specialization } from "src/specializations/specializations.model";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'technicians'})
export class Technician {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    patronymic: string;

    @Column({unique: true})
    phone_number: string;

    @OneToOne(() => Specialization)
    @JoinColumn({name: 'specialization_id'})
    specialization: Specialization; 

    @OneToMany(() => Region, region => region.technician)
    regions: Region[];
}
