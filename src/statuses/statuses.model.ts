import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "statuses"})
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    value: string;
}