import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'module-alias/register';
import { AppModule } from './app.module';
import { APP_ENV, PORT } from './modules/config/environment';

const port = PORT || 3000;
const address = APP_ENV === 'local' ? '127.0.0.1' : '0.0.0.0';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const config = new DocumentBuilder()
    .setTitle('People API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  await app.listen(port, address, () => {
    console.log(`API listening on ${port}`);
  });
}

bootstrap();
