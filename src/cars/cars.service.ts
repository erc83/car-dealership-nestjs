import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()                   // se puede inyectar
export class CarsService {

    private cars: Car[] = [            // al ser private solo puede ser consumido dentro del servicio
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ]

    // creacion de metodo
    findAll() {
        return this.cars
    }

    findOneById( id: string ) {

        const car = this.cars.find((car) => car.id === id )

        if( !car ) {
            //throw new NotFoundException()
            throw new NotFoundException(`Car with id '${ id }' not found`) // message personalizado
        }

        return car

    }

    // usando Dto
    create( createCarDto: CreateCarDto ) {
        
        if( !createCarDto ) {
            throw new NotFoundException(`Internal server error`)
        }

        const car: Car = {
            id: uuid(),
            ...createCarDto    //esparcir las propiedades
        }

        this.cars.push( car )   // carga al array de cars
        
        return car

    }

}
