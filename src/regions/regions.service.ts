import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from './regions.model';
import { Repository } from 'typeorm';

@Injectable()
export class RegionsService {
    constructor(@InjectRepository(Region) private regionRepo: Repository<Region>) {}

    async find() {
        return await this.regionRepo.find()
    }
}
