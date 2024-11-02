import { Technician } from "src/technicians/technicians.model";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'regions'})
export class Region {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @ManyToOne(() => Technician, technician => technician.regions)
    technician: Technician;
}