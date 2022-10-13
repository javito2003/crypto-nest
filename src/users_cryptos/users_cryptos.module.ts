import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crypto } from 'src/typeorm/entities/Crypto';
import { User } from 'src/typeorm/entities/User';
import { UsersCryptosController } from './users_cryptos.controller';
import { UsersCryptosService } from './users_cryptos.service';

@Module({
  imports: [TypeOrmModule.forFeature([ User, Crypto ])],
  controllers: [ UsersCryptosController ],
  providers: [ UsersCryptosService ]
})
export class UsersCryptosModule {}
