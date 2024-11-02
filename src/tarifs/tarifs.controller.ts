import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { TarifsService } from './tarifs.service';
import { Tarif } from './tarifs.model';

@Controller('tarifs')
export class TarifsController {
    constructor(private tarifsService: TarifsService) {}

    @Post()
    async create(@Body() tarifData: Tarif) {
        return await this.tarifsService.create(tarifData)
    }

    @Get()
    async findAll() {
        return await this.tarifsService.find();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() taridData: Tarif) {
        return await this.tarifsService.update(id, taridData)
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        await this.tarifsService.remove(id)
    }
}
