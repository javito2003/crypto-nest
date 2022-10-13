import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import response from 'src/utils/responses';
import { CreateUserParams, LoginUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
    async createUser(user: CreateUserParams) {
        const findUser = await this.userRepository.findOneBy({ email: user.email })
        if(!findUser) {
            let create = this.userRepository.create(user)
            let userCreated = await this.userRepository.save(create)
            delete userCreated.password
            return response.success(userCreated, HttpStatus.CREATED)
        } else {
            return response.error("User already exist", HttpStatus.BAD_REQUEST)
        }
    }

    findByEmail(email: string) {
        return this.userRepository.findOneBy({ email })
    }

    async getUser(id: number) {
        try {
            let user = await this.userRepository.findOneBy({ id })
            delete user.password
            return response.success(user, HttpStatus.OK)
            
        } catch (error) {
            return response.error("User not found", HttpStatus.BAD_REQUEST)
            
        }
    }
}