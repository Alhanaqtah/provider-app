import { Client } from "src/clients/clients.model";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Client, client => client.tarif)
    clients: Client[];
}