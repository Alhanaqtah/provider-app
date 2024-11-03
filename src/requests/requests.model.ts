import { Client } from "src/clients/clients.model";
import { Status } from "src/statuses/statuses.model";
import { Technician } from "src/technicians/technicians.model";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'requests'})
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  requested_at: Date;

  @ManyToOne(() => Technician, technician => technician.requests, {nullable: true})
  technician: Technician;

  @ManyToOne(() => Status, status => status.requests)
  status: Status;

  @ManyToOne(() => Client, client => client.requests)
  @JoinColumn({name: 'client_id'})
  client: Client;
}