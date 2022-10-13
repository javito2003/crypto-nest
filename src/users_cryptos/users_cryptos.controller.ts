import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SaveCryptoDTO } from './dtos/SaveCrypto.dto';
import { UsersCryptosService } from './users_cryptos.service';

@Controller('users-cryptos')
export class UsersCryptosController {
    constructor(private userCryptoService: UsersCryptosService){}
    @UseGuards(JwtAuthGuard)
    @Post('/create')
    createCrypto(@Request() req, @Body() crypto: SaveCryptoDTO) {
        crypto.userId = req.user
        return this.userCryptoService.saveCrypto(crypto)
    }
}
