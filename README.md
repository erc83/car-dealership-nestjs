<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) Proyect CRUD initial.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```

## Excecute Seed Data

```
http://localhost:3000/seed
```

## CRUD cars Endpoint

Get
```
http://localhost:3000/cars
```

Get by uuid
```
http://localhost:3000/cars/v4/07b81363-33b8-4595-aec0-cea374d2477d
```

Post
```
localhost:3000/cars

body:
{
    "brand": "Volvo",
    "model": "XC40"
}
```

Put example.
```
http://localhost:3000/cars/5e72761f-e788-4d57-a3cc-9de2e7ac54c1

body:
{
    "brand": "Nissan",
    "model": "Versa"
}
```

Delete
```
http://localhost:3000/cars/03cf18dd-b254-4c69-a57e-4cf938cec4e6
```

## CRUD brands Endpoint

Get all brand
```
http://localhost:3000/brands
```

Get Brand by uuid
```
http://localhost:3000/brands/61331d78-c824-4308-b073-9ac2dfb32af4
```

Post
```
http://localhost:3000/brands

body:
{
    "name": "honda"
}
```

Patch
```
http://localhost:3000/brands/61331d78-c824-4308-b073-9ac2dfb32af4

body:
{
    "name": "tesla"
}
```

Delete Brand by uuid
```
http://localhost:3000/brands/61331d78-c824-4308-b073-9ac2dfb32af4
```


## Note: When the server is lifted, the seed has to be loaded
