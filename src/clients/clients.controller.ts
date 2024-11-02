import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
    constructor(private clientsService: ClientsService) {}

    @Post()
    async create(@Body() clientData: {name: string, surname: string, patronymic: string, phone_number: string, address: string, tarif: string}) {
        await this.clientsService.create(clientData)
    }

    @Get()
    async findAll(
        @Query('skip') skip: number,
        @Query('limit') limit: number
    ) {
        if (skip == undefined || skip <= 0) {
            skip = 1
        }

        if (limit == undefined) {
            limit = 0
        }

        return await this.clientsService.findAll(skip, limit)
    }

    @Get(':id')
    async find(@Param('id') id: number) {
        return await this.clientsService.find(id)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() clientsData: {name: string, surname: string, patronymic: string, phone_number: string, address: string, tarif: string}) {
        return await this.clientsService.update(id, clientsData)
    }
}
