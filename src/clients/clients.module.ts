import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients.model';
import { Tarif } from 'src/tarifs/tarifs.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client, Tarif])
  ],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
