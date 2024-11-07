import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Client } from './clients.model';
import { Tarif } from 'src/tarifs/tarifs.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { skip } from 'node:test';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Client)
        private clientRepo: Repository<Client>,
        @InjectRepository(Tarif)
        private tarifRepo: Repository<Tarif>,
    ) {}


    async create(clientData: {name: string, surname: string, patronymic: string, phone_number: string, address: string, tarif: string}) {
        const found = await this.clientRepo.findOne({where: {phone_number: clientData.phone_number}});
        if (found) {
            throw new HttpException('phone number already taken', HttpStatus.CONFLICT);
        }

        const tarif = await this.tarifRepo.findOne({where: {title: clientData.tarif}});
        if (!tarif) {
            throw new HttpException('tarif not found', HttpStatus.NOT_FOUND);
        }

        return await this.clientRepo.save({
            ...clientData,
            tarif: tarif
        });
    }

    async findAll(skip: number, limit: number) {
        skip = (skip - 1) * limit
        return await this.clientRepo.find({
            skip: skip,
            take: limit,
            relations: ['tarif']
        });
    }

    async find(id: number) {
        const t = await this.clientRepo.findOne({where: { id: id }});
        if (!t) {
            throw new HttpException('technician not found', HttpStatus.BAD_REQUEST);
        }

        return t
    }

    async update(id: number, clientData: {name: string, surname: string, patronymic: string, phone_number: string, address: string, tarif: string}) {
        const tarif = await this.tarifRepo.findOne({where: {title: clientData.tarif}});
        if (!tarif) {
            throw new HttpException('tarif not found', HttpStatus.NOT_FOUND);
        }
        
        const client = this.clientRepo.create({
            ...clientData,
            tarif: tarif
        })

        await this.clientRepo.update({id: id}, client)
        
        return await this.clientRepo.findOne({where: {id: id}});
    }
}
