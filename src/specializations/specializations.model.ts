import { Technician } from "src/technicians/technicians.model";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'specializations'})
export class Specialization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    value: string;

    @OneToMany(() => Technician, specialization => specialization.specialization)
    technicians: Specialization[];
}