import { Controller, Get } from '@nestjs/common';
import { RegionsService } from './regions.service';

@Controller('regions')
export class RegionsController {
    constructor(private regionsServie: RegionsService) {}

    @Get()
    async find() {
        return await this.regionsServie.find();
    }
}
