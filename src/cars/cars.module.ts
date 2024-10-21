import { Module } from '@nestjs/common'
import { CarsController } from './cars.controller'
import { CarsService } from './cars.service';

@Module({
    controllers: [CarsController],
    providers: [CarsService],           // el en provider tiene que estar el CarsService
})
export class CarsModule {}
