import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto';

@Controller('/cars')           // contiene el controllador escucha la solicitud del cliente y emitir respuestas
// @UsePipes( ValidationPipe )         // se comento para agregarlo globalmente en la app 
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
    getCarById( @Param('id', ParseUUIDPipe ) id: string ) { //@Param('id') -  @Body() -  @Query() -  @Res()
        console.log({ id })

        return this.carsService.findOneById( id )
    }


    @Get('/v4/:id')
    getCarByIdV4( @Param('id', new ParseUUIDPipe({ version: '5'}) ) id: string ) { //@Param('id') -  @Body() -  @Query() -  @Res()
        console.log({ id })

        return this.carsService.findOneById( id )
    }

    @Post()
    //@UsePipes( ValidationPipe )     // se puede enviar a nivel de controllador
    create( @Body() createCarDto: CreateCarDto ) {
        return createCarDto
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
