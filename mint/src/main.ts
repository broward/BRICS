import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Realm } from './realm'
import { Visitor } from './visitor'

async function bootstrap() {
  let BRICS: Realm[] = []
  BRICS[0] = new Realm(1, "Brazil")
  BRICS[1] = new Realm(2, 'Russia')
  BRICS[2] = new Realm(3, 'India')
  BRICS[3] = new Realm(4, 'China')
  BRICS[4] = new Realm(5, 'South Africa')

  let visitor = new Visitor(BRICS)
  console.log(BRICS[0].realmName)


  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap();
