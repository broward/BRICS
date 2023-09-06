import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Realm } from './realm'
import { realms } from './realm'
import { Country } from './realm'
import { Visitor } from './visitor'

async function bootstrap() {

 console.log(realms)
  let visitor = new Visitor(realms)
  var index = realms[0].country
  console.log('my country is ' + realms[0].country)
  console.log('my index is ' + Country[index])

  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap();
