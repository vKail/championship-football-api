import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Championship-Football-Api')
    .setDescription('Documentacion para Champioship-Football-Api')
    .setVersion('1.0')
    .addTag('Champioship-Football-Api')
    .build();
  app.useGlobalFilters(new AllExceptionsFilter());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
