import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()                   // se puede inyectar
export class CarsService {

    private cars = [            // al ser private solo puede ser consumido dentro del servicio
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ]

    // creacion de metodo
    findAll() {
        return this.cars
    }

    findOneById( id: number ) {

        const car = this.cars.find((car) => car.id === id )

        if( !car ) {
            //throw new NotFoundException()
            throw new NotFoundException(`Car with id '${ id }' not found`) // message personalizado
        }

        return car

    }


}
