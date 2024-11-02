import { Module } from '@nestjs/common';
import { TarifsController } from './tarifs.controller';
import { TarifsService } from './tarifs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarif } from './tarifs.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tarif])
  ],
  controllers: [TarifsController],
  providers: [TarifsService]
})
export class TarifsModule {}
