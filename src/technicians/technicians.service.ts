import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Technician } from './technicians.model';
import { Repository } from 'typeorm';
import { Region } from 'src/regions/regions.model';
import { Specialization } from 'src/specializations/specializations.model';

@Injectable()
export class TechniciansService {
    constructor(
        @InjectRepository(Technician)
        private technicianRepo: Repository<Technician>,
        @InjectRepository(Region)
        private regionRepo: Repository<Region>,
        @InjectRepository(Specialization)
        private specializationRepo: Repository<Specialization>
    ) {}


    async create(technicianData: {name: string, surname: string, patronymic: string, phone_number: string, specialization: string, region: string}) {
        const found = await this.technicianRepo.findOne({where: {phone_number: technicianData.phone_number}});
        if (found) {
            throw new HttpException('phone number already taken', HttpStatus.CONFLICT);
        }

        const specialization = await this.specializationRepo.findOne({ where: { value: technicianData.specialization } });
        if (!specialization) {
            throw new HttpException('specialization not found', HttpStatus.NOT_FOUND);
        }

        const region = await this.regionRepo.findOne({where: {name: technicianData.region}});
        if (!region) {
            throw new HttpException('region not found', HttpStatus.NOT_FOUND);
        }

        return await this.technicianRepo.save({
            ...technicianData,
            specialization: specialization,
            region: region
        });
    }

    async findAll() {
        return await this.technicianRepo.find({relations: ['specialization', 'region']});
    }

    async find(id: number) {
        const t = await this.technicianRepo.findOne({where: { id: id }});
        if (!t) {
            throw new HttpException('technician not found', HttpStatus.BAD_REQUEST);
        }

        return t
    }

    async update(id: number, technicianData: {name: string, surname: string, patronymic: string, phone_number: string, specialization: string, region: string}) {
        const specialization = await this.specializationRepo.findOne({ where: { value: technicianData.specialization } });
        if (!specialization) {
            throw new HttpException('specialization not found', HttpStatus.NOT_FOUND);
        }

        const region = await this.regionRepo.findOne({where: {name: technicianData.region}});
        if (!region) {
            throw new HttpException('region not found', HttpStatus.NOT_FOUND);
        }
        
        const technician = this.technicianRepo.create({
            ...technicianData,
            specialization: specialization,
            region: region
        })

        await this.technicianRepo.update({id: id}, technician)
        
        return await this.technicianRepo.findOne({where: {id: id}});
    }
}
