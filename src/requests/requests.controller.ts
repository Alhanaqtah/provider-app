import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { Technician } from 'src/technicians/technicians.model';

@Controller('requests')
export class RequestsController {
    constructor(private requestsService: RequestsService) {}

    @Get()
    async findAll() {
        return await this.requestsService.findAll();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() t: {technician: string}) {
        await this.requestsService.update(id, t)
    }
}
