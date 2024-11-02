import { Technician } from "src/technicians/technicians.model";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'regions'})
export class Region {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @ManyToMany(() => Technician, technician => technician.regions)
    technicians: Technician[];
}