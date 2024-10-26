import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from 'src/cars/cars.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports : [ CarsModule ],          // importando desde cars.module.ts
})
export class SeedModule {}
