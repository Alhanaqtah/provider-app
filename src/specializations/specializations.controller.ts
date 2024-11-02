import { Controller, Get } from '@nestjs/common';
import { SpecializationsService } from './specializations.service';

@Controller('specializations')
export class SpecializationsController {
    constructor(private specializationsService: SpecializationsService) {}

    @Get()
    async findAll() {
        return await this.specializationsService.findAll();
    }
}
