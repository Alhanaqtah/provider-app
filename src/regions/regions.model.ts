import { Technician } from "src/technicians/technicians.model";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'regions'})
export class Region {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @OneToMany(() => Technician, technician => technician.region)
    technicians: Technician[];
}