import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { AppModule } from "./modules/core/app.module";
import { setupSwagger } from './swagger';
import { HttpExceptionFilter } from './shared/exceptions/filters/http-exception.filter';
import { BadRequestExceptionFilter } from './shared/exceptions/filters/bad.request.exception.filter';
import { ResourceNotFoundExceptionFilter } from './shared/exceptions/filters/resource.not.found.exception.filter';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new BadRequestExceptionFilter(),
    new ResourceNotFoundExceptionFilter(),
  );
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap().then(() => true);
