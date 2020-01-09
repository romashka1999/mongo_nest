import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly User: Model<any>){} //inject User model to user service

    async getAllUsers(): Promise<any> {
        return await this.User.find();
    }
    
}
