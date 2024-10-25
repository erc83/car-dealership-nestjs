import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
import { create } from 'domain';

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
        return this.carsService.create(createCarDto)        // no manejamos la logica aqui en el controlador
    }

    @Put('/:id')
    update( 
        @Body() updateCreateDto: UpdateCarDto, 
        @Param('id', ParseUUIDPipe) id:string ) {

            return this.carsService.update( id , updateCreateDto )

    }


    @Delete('/:id')
    delete( @Param('id', ParseUUIDPipe ) id: string ) {
        return this.carsService.delete( id )
    }
}
