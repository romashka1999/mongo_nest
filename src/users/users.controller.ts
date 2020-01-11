import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get('getAllUsers')
    getAllusers(@Query() query): Promise<any> {
        return this.usersService.getAllUsers(query);
    }
    
    @Get('getuserByid/:id')
    getUserById(@Param() param): Promise<any> {
        return this.usersService.getUSerById(param);
    }

    @Post('createUser')
    createUser(@Body() body: any): Promise<any> {
        return this.usersService.createUser(body);
    }

    @Delete('deleteUserById/:id')
    deleteUserById(@Param() param): Promise<any> {
        return this.usersService.deleteUserById(param);
    }

    @Put('updateUserById/:id')
    updateUserById(@Param() param, @Body() body: any): Promise<any> {
        return this.usersService.updateUserById(param, body);
    }
}
