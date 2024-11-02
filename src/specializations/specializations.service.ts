import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Specialization } from './specializations.model';
import { Repository } from 'typeorm';

@Injectable()
export class SpecializationsService {
    constructor(
        @InjectRepository(Specialization)
        private specializationRepo: Repository<Specialization>
    ) {}

    async findAll() {
        return await this.specializationRepo.find()
    }
}
