import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarif } from './tarifs.model';
import { Repository } from 'typeorm';

@Injectable()
export class TarifsService {
    constructor(@InjectRepository(Tarif) private tarifsRepo: Repository<Tarif>) {}

    async create(tarifData: Tarif) {
        const found = await this.tarifsRepo.findOne({where: {title: tarifData.title}});
        if (found) {
            throw new HttpException('tarif already exists', HttpStatus.CONFLICT);
        }

        delete tarifData.id;

        return await this.tarifsRepo.save(tarifData);
    }

    async find() {
        return await this.tarifsRepo.find();
    }

    async update(id: number, tarifData: Tarif) {
        const found = await this.tarifsRepo.findOne({where: {id: id}});
        if (!found) {
            throw new HttpException('tarif not found', HttpStatus.NOT_FOUND);
        }

        delete tarifData.id;

        await this.tarifsRepo.update({ id: id }, tarifData);

        return await this.tarifsRepo.findOne({where: {id: id}});
    }

    async remove(id: number) {
        await this.tarifsRepo.delete({ id: id });
    }
}
