import { Controller, Get } from '@nestjs/common';
import { CryptosService } from 'src/cryptos/service/cryptos/cryptos.service';

@Controller('cryptos')
export class CryptosController {
    constructor(private cryptoService: CryptosService) {}

    @Get() 
    getCryptos() {
        return this.cryptoService.getCryptos();
    }
}
