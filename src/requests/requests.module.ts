import { Module } from '@nestjs/common';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './requests.model';
import { Technician } from 'src/technicians/technicians.model';
import { Status } from 'src/statuses/statuses.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Request, Technician, Status])
  ],
  controllers: [RequestsController],
  providers: [RequestsService]
})
export class RequestsModule {}
