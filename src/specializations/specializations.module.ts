import { Module } from '@nestjs/common';
import { SpecializationsController } from './specializations.controller';
import { SpecializationsService } from './specializations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialization } from './specializations.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Specialization])
  ],
  controllers: [SpecializationsController],
  providers: [SpecializationsService]
})
export class SpecializationsModule {}
