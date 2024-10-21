import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')           // contiene el controllador escucha la solicitud del cliente y emitir respuestas
export class CarsController {

    //DI
    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()                    // necesita el metodo @Get, avisamos a nest que cuando este la solicitud responda
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe ) id: number ) { //@Param('id') -  @Body() -  @Query() -  @Res()
        console.log({ id })

        return this.carsService.findOneById( id )
    }

}
