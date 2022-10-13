import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Crypto } from './typeorm/entities/Crypto';
import { UsersCryptosController } from './users_cryptos/users_cryptos.controller';
import { UsersCryptosModule } from './users_cryptos/users_cryptos.module';
import { CryptosModule } from './cryptos/cryptos.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async(configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT_SQL'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_DATABASE'),
        entities: [ User, Crypto ],
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    AuthModule,
    UsersCryptosModule,
    CryptosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}