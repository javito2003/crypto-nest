import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { CryptosService } from './service/cryptos/cryptos.service';
import { CryptosController } from './controller/cryptos/cryptos.controller';

@Module({
  imports: [HttpModule], 
  controllers: [CryptosController],
  providers: [CryptosService]
})
export class CryptosModule {}
