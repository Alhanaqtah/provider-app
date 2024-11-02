import { Client } from "src/clients/clients.model";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToMany(() => Client, client => client.tarifs)
    clients: Client[];
}