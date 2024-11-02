import { Module } from '@nestjs/common';
import { StatusesController } from './statuses.controller';
import { StatusesService } from './statuses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from './statuses.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Status])
  ],
  controllers: [StatusesController],
  providers: [StatusesService]
})
export class StatusesModule {}
