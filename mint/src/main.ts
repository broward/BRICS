import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { realms, Country } from './fintech/realm';
import { Visitor } from './fintech/visitor';

async function bootstrap() {
  console.log(realms);
  const visitor = new Visitor(realms);
  visitor.getTx();
  const index = realms[0].country;
  console.log('my country is ' + realms[0].country);
  console.log('my index is ' + Country[index]);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
