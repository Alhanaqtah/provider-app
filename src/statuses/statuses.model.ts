import { Request } from "src/requests/requests.model";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "statuses"})
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    value: string;

    @OneToMany(() => Request, request => request.status)
    requests: Request[];
}