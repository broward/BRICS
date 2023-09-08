import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { realms, Country } from './fintech/realm';
import { Visitor } from './fintech/visitor';

async function bootstrap() {
  console.log(realms);
  console.log('reserves = ' + realms[0].reserves.length);
  const visitor = new Visitor(realms);
  visitor.getTrx();
  const index = realms[0].country;
  console.log('my country is ' + realms[0].country);
  console.log('my index is ' + Country[index]);
  console.log('my realmID = ' + realms[0].realmID);

  visitor.rebalance();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
