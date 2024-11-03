import { Request } from "src/requests/requests.model";
import { Tarif } from "src/tarifs/tarifs.model";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => Tarif, tarif => tarif.clients)
    tarif: Tarif;

    @OneToMany(() => Request, request => request.client)
    requests: Request[];
}