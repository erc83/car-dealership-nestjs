import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')           // contiene el controllador escucha la solicitud del cliente y emitir respuestas
export class CarsController {

    private cars = ['Toyota', 'Honda', 'Jeep']

    @Get()                    // necesita el metodo @Get, avisamos a nest que cuando este la solicitud responda
    getAllCars() {
        return this.cars
    }

    @Get(':id')
    getCarById( @Param('id') id: string ) { //@Param('id') -  @Body() -  @Query() -  @Res()
        //console.log({ id })

        return this.cars[id]
    }

}
