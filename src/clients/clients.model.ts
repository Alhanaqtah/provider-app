import { Request } from "src/requests/requests.model";
import { Tarif } from "src/tarifs/tarifs.model";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'clients'})
export class Client {
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

    @Column()
    address: string;

    @ManyToMany(() => Tarif, tarif => tarif.clients)
    @JoinTable({name: 'clients_tarifs', joinColumn: {name: 'client_id'}, inverseJoinColumn: {name: 'tarif_id'}})
    tarifs: Tarif[];

    @OneToMany(() => Request, request => request.client)
    requests: Request[];
}