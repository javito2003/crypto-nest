import { Body, Controller, Get, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt'
import response from 'src/utils/responses';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('/register')
    async register(@Body() user: CreateUserDTO) {
        if(!user.email || !user.name || !user.password) {
            return response.error("All fields are required", HttpStatus.BAD_REQUEST)
        }
        let password = user.password
        user.password = await bcrypt.hash(password, 10)
        return this.userService.createUser(user)
    }

    @Get('/token')
    @UseGuards(JwtAuthGuard)
    getUser(@Request() req) {
        return this.userService.getUser(parseInt(req.user.userId))
    }

}
