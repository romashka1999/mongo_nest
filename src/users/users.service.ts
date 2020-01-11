import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IgetAllUsersQuery, IcreateUser, IUser } from './interfaces'; 
import { BaseRepository } from 'src/shared/BaseRepository';

@Injectable()
export class UsersService extends BaseRepository {
                    
    //inject User model to user service
    constructor(@InjectModel('User') private readonly User: Model<IUser>){
        super(User); //Base repository
    } 

    async getAllUsers(query: any): Promise<any> {

        if(query.limit && query.offset){
            const pagination: IgetAllUsersQuery =  {
                limit: Number(query.limit),
                offset: Number(query.offset)
            }
            return await this.getList(pagination);
        } else {
            return await this.getList(null);
        }
    }

    async getUSerById(param: any): Promise<any> {
        const id: string = param.id;
        return await this.getOneById(id);
    }

    async createUser(body: any): Promise<any> {
        const user: IcreateUser = body;
        return await this.create(user);
    }

    async updateUserById(param: any, body: any): Promise<any> {
        const id: string = param.id;
        const user: IcreateUser = body;
        return await this.update(id, user);
    }

    async deleteUserById(param: any): Promise<any> {
        const id: string = param.id;
        return await this.delete(id);
    }

}
