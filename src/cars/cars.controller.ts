import { Controller, Get } from '@nestjs/common';

@Controller('cars')           // contiene el controllador escucha la solicitud del cliente y emitir respuestas
export class CarsController {

    @Get()                    // necesita el metodo @Get, avisamos a nest que cuando este la solicitud responda
    getAllCars() {
        return ['Toyota', 'Honda', 'Jeep']
    }
}
