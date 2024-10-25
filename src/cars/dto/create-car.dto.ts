import { IsString } from "class-validator"


export class CreateCarDto {
    // que propiedades estamos esperando recibir especificamente brand y model
    @IsString({ message: `The brand most be a cool string` })   // mensaje personalizado
    readonly brand: string               // no cambian sus propiedades se usa readonly
    
    @IsString()
    readonly model: string

}

// mas adelante los DTO nos van a servir para hacer validaciones de la data


