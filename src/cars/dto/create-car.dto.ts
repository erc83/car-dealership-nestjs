

export class CreateCarDto {
    // que propiedades estamos esperando recibir especificamente brand y model

    readonly brand: string               // no cambian sus propiedades se usa readonly

    readonly model: string

}

// mas adelante los DTO nos van a servir para hacer validaciones de la data


