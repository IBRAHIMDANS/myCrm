import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./modules/core/app.module";
import { ClassSerializerInterceptor, ValidationPipe } from "@nestjs/common";
import helmet from "helmet";
import { LoggingInterceptor } from "./shared/logging.interceptor";
import { HttpExceptionFilter } from "./shared/exceptions/filters/http-exception.filter";
import { BadRequestExceptionFilter } from "./shared/exceptions/filters/bad.request.exception.filter";
import { ResourceNotFoundExceptionFilter } from "./shared/exceptions/filters/resource.not.found.exception.filter";
import { setupSwagger } from "./swagger";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const { PORT = 3000 } = process.env;


  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new BadRequestExceptionFilter(),
    new ResourceNotFoundExceptionFilter()
  );


  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true
  }));
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector)),
    new LoggingInterceptor()
  );
  // const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  // config de swagger

  // const iconPath = join(__dirname, '../public', 'favicon.ico');
  // const options = {
  //   maxAge: 200 * 60 * 60 * 24 * 1000,
  // };
  // app.use(favicon(iconPath, options));

  setupSwagger(app);

  await app.listen(PORT);

}

bootstrap();
