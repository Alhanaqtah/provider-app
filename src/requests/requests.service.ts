import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from './requests.model';
import { Not, Repository } from 'typeorm';
import { Technician } from 'src/technicians/technicians.model';
import { Status } from 'src/statuses/statuses.model';

@Injectable()
export class RequestsService {
    constructor(
        @InjectRepository(Request)
        private requestRepo: Repository<Request>,
        @InjectRepository(Technician)
        private technicianRepo: Repository<Technician>,
        @InjectRepository(Status)
        private statusRepo: Repository<Status>
    ) { }

    async findAll() {
        return await this.requestRepo.find({
            relations: ['status', 'technician'],
            where: [
                { status: { id: 1 } }
            ],
            order: { requested_at: 'DESC' }
        });
    }


    async find(id: number) {
        return await this.requestRepo.findOneBy({ id: id })
    }

    async update(id: number, t: { technician: string }) {
        const tech = await this.technicianRepo.findOne({ where: { name: t.technician } });
        if (!tech) {
            throw new HttpException('technicion not found', HttpStatus.NOT_FOUND);
        }

        const status = await this.statusRepo.findOneBy({ value: 'в работе' })
        if (!status) {
            throw new HttpException('status not found', HttpStatus.NOT_FOUND);
        }


        await this.requestRepo.update({ id: id }, { technician: tech, status: status })
    }
}
