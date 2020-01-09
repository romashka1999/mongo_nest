import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { createUserDto } from './usersCreate.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get('getAllUsers')
    getAllusers(): Promise<any> {
        return this.usersService.getAllUsers();
    }
    
    @Get('getuserByid/:id')
    getUserById(@Param() param): any {
        return param.id;
    }

    @Post('createUser')
    createUser(@Body() body: createUserDto): any {
        return body;
    }

    @Delete('deleteUserById/:id')
    deleteUserById(@Param() param): any {
        return param.id;
    }

    @Put('updateUserById/:id')
    updateUserById(@Param() param): any {
        return param.id;
    }
}
