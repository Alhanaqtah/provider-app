import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RequestsModule } from './requests/requests.module';
import { TarifsModule } from './tarifs/tarifs.module';
import { TechniciansModule } from './technicians/technicians.module';
import { ClientsModule } from './clients/clients.module';
import { StatusesModule } from './statuses/statuses.module';
import { RegionsModule } from './regions/regions.module';
import { SpecializationsModule } from './specializations/specializations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './requests/requests.model';
import { Status } from './statuses/statuses.model';
import { Region } from './regions/regions.model';
import { Specialization } from './specializations/specializations.model';
import { Technician } from './technicians/technicians.model';
import { Tarif } from './tarifs/tarifs.model';
import { Client } from './clients/clients.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    RequestsModule,
    TarifsModule,
    TechniciansModule,
    ClientsModule,
    StatusesModule,
    RegionsModule,
    SpecializationsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3001,
      username: 'postgres',
      password: 'postgres',
      database: 'provider_db',
      entities: [Request, Status, Region, Specialization, Technician, Tarif, Client],
      synchronize: true,
      autoLoadEntities: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      serveRoot: '/'
    }),
  ],
  controllers: [AppController]
})
export class AppModule {}
