import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TechniciansService } from './technicians.service';

@Controller('technicians')
export class TechniciansController {
    constructor(private techniciansService: TechniciansService) {}

    @Post()
    async create(@Body() technicianData: {name: string, surname: string, patronymic: string, phone_number: string, specialization: string, region: string}) {
        await this.techniciansService.create(technicianData)
    }

    @Get()
    async findAll() {
        return await this.techniciansService.findAll()
    }

    @Get(':id')
    async find(@Param('id') id: number) {
        return await this.techniciansService.find(id)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() technicianData: {name: string, surname: string, patronymic: string, phone_number: string, specialization: string, region: string}) {
        return await this.techniciansService.update(id, technicianData)
    }
}
