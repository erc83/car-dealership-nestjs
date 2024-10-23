import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('/cars')           // contiene el controllador escucha la solicitud del cliente y emitir respuestas
export class CarsController {

    //DI
    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()                    // necesita el metodo @Get, avisamos a nest que cuando este la solicitud responda
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get('/:id')
    getCarById( @Param('id', ParseIntPipe ) id: string ) { //@Param('id') -  @Body() -  @Query() -  @Res()
        console.log({ id })

        return this.carsService.findOneById( id )
    }

    @Post()
    create( @Body() body: any ) {
        return body
    }

    @Put('/:id')
    update( @Body() body: any, @Param('id') id:string ) {
        const car = this.carsService.findOneById( id )
        const { brand, model } = body

        const carUpdate = {
            ...car,
            brand,
            model
        }
        return carUpdate
    }


    @Delete('/:id')
    delete( @Param('id', ParseIntPipe ) id: number ) {
        return {
            method: 'delete',
            id
        }
    }
}
