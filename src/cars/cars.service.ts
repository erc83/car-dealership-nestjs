import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto';

@Injectable()                   // se puede inyectar
export class CarsService {

    private cars: Car[] = [            // al ser private solo puede ser consumido dentro del servicio
        /* {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        }, */
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

    update( id: string, updateCarDto: UpdateCarDto  ) {
        let carDB = this.findOneById( id )

        if( updateCarDto.id && updateCarDto.id !== id )
            throw new BadRequestException(`Car id is not valid`)

        this.cars = this.cars.map( car => {
            if( car.id === id ) {
                carDB = {
                    ...carDB,               // esparzo la prop
                    ...updateCarDto,        // update las prop inclusive si se envia el id
                    id                      // modifica el id manteniendo el que se envia
                }
                return carDB
            }

            return carDB                    
        })

        return carDB
    }

    delete( id: string ) {

        let carDB = this.findOneById( id )

        this.cars = this.cars.filter(car => {
            return car.id !== carDB.id 
        })
        
        return {
            message: `Se ha eliminado correctamente el car ${id}`
        }
    }

}
