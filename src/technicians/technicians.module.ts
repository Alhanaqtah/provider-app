import { Module } from '@nestjs/common';
import { TechniciansController } from './technicians.controller';
import { TechniciansService } from './technicians.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Technician } from './technicians.model';
import { Region } from 'src/regions/regions.model';
import { Specialization } from 'src/specializations/specializations.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Technician, Region, Specialization])
  ],
  controllers: [TechniciansController],
  providers: [TechniciansService]
})
export class TechniciansModule {}
