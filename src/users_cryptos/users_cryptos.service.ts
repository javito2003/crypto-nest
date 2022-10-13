import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crypto } from 'src/typeorm/entities/Crypto';
import { User } from 'src/typeorm/entities/User';
import response from 'src/utils/responses';
import { CreateUserCryptoParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersCryptosService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>, @InjectRepository(Crypto) private cryptoRepository: Repository<Crypto>) {}

    async saveCrypto(crypto: CreateUserCryptoParams) {
        const user = await this.userRepository.findOneBy({ id: crypto.userId })
        if(!user) {
            return response.error("User not found", HttpStatus.BAD_REQUEST)
        }
        const newCryptoUser = this.cryptoRepository.create({ ...crypto, user })
        const cryptoCreated = await this.cryptoRepository.save(newCryptoUser)
        if(cryptoCreated) {
            return response.success(cryptoCreated, HttpStatus.CREATED)
        } else {
            return response.error("Error to create crypto", HttpStatus.BAD_REQUEST)
        }
    }
}
