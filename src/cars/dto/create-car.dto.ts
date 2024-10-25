import { IsString, MinLength } from "class-validator"


export class CreateCarDto {
    // que propiedades estamos esperando recibir especificamente brand y model
    @IsString({ message: `The brand most be a cool string` })   // mensaje personalizado
    readonly brand: string               // no cambian sus propiedades se usa readonly
    
    @IsString()
    @MinLength(3, {message: `the model most be contains minimum 3 letters`})        // se pueden agregar mas decoradores
    readonly model: string

}

// mas adelante los DTO nos van a servir para hacer validaciones de la data







