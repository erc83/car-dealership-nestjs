import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({            // tiene muchas propiedades
      whitelist: true,              // deja pasar los valores de la data que se estan esperando
      forbidNonWhitelisted: true,   // envia un mensaje por cada valor agregado que no se necesita
    })
  )

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
