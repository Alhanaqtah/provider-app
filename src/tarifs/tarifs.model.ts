import { Client } from "src/clients/clients.model";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tarifs'})
export class Tarif {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    title: string;

    @Column()
    cost: number;

    @Column()
    description: string;

    @ManyToOne(() => Client, client => client.tarif)
    clients: Client[];
}