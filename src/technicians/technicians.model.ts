import { Region } from "src/regions/regions.model";
import { Specialization } from "src/specializations/specializations.model";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => Specialization)
    @JoinColumn({ name: 'specialization_id' })
    specialization: Specialization;

    @ManyToOne(() => Region)
    @JoinColumn({ name: 'region_id' })
    region: Region;
}
