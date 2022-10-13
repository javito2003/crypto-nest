import { Test, TestingModule } from '@nestjs/testing';
import { UsersCryptosController } from './users_cryptos.controller';

describe('UsersCryptosController', () => {
  let controller: UsersCryptosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersCryptosController],
    }).compile();

    controller = module.get<UsersCryptosController>(UsersCryptosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
