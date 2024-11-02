import { Body, Controller, Get, Post } from '@nestjs/common';
import { StatusesService } from './statuses.service';

@Controller('statuses')
export class StatusesController {
    constructor(private statusesService: StatusesService) {}
    
    @Get()
    async getAll() {
        return await this.statusesService.find()
    }
}
