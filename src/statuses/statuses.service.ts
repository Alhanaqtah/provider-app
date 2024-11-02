import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './statuses.model';
import { Repository } from 'typeorm';

@Injectable()
export class StatusesService {
    constructor(@InjectRepository(Status) private statusRepo: Repository<Status>) {}

    async find() {
        return await this.statusRepo.find()
    }
}
