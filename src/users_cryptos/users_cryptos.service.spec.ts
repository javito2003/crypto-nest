import { Test, TestingModule } from '@nestjs/testing';
import { UsersCryptosService } from './users_cryptos.service';

describe('UsersCryptosService', () => {
  let service: UsersCryptosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersCryptosService],
    }).compile();

    service = module.get<UsersCryptosService>(UsersCryptosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
