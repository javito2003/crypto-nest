import { HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { IUser } from 'src/utils/interfaces';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import response from 'src/utils/responses';

@Injectable()
export class AuthService {
    constructor(private userService:UsersService, private jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<IUser | null> {
        const findUser = await this.userService.findByEmail(email)
        if(!findUser) {
            return null
        }
        if(await bcrypt.compare(password, findUser.password)) {
            delete findUser.password
            return findUser
        }
        return null
    }

    async login(id: number) {
        const payload = { userId: id }
        return response.success({token: this.jwtService.sign(payload)}, HttpStatus.ACCEPTED)
    }
}
