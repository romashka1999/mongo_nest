import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IgetAllUsersQuery, IcreateUser } from './interfaces'; 
import { create } from 'domain';
import { BaseRepository } from 'src/shared/BaseRepository';

@Injectable()
export class UsersService extends BaseRepository {
                    
    //inject User model to user service
    constructor(@InjectModel('User') private readonly User: Model<any>){
        super(User);
    } 

    async getAllUsers(pagination: IgetAllUsersQuery | null): Promise<any> {
        return await this.getList(pagination);
    }

    async getUSerById(id: string): Promise<any> {
        return await this.getOneById(id);
    }

    async createUser(user: IcreateUser): Promise<any> {
        return await this.create(user);
    }

    async updateUserById(id: string, body: any): Promise<any> {
        return await this.update(id, body);
    }

    async deleteUserById(id: string): Promise<any> {
        return await this.delete(id);
    }

}
