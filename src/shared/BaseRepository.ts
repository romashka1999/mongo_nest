import { PaginationOutput } from "../helpers/pagination";
import { Injectable, HttpException } from '@nestjs/common'

// export interface IBaseRepository {
//     getList(pagination: PaginationOutput | null):Promise<any>;
//     getOneById(id: string): Promise<any>;
//     getOneByWhere(where: any): Promise<any>;
//     create(entity: any): Promise<any>;
//     update(id: string, entity: any): Promise<any>;
//     delete(id: string): Promise<any>;
// }

@Injectable()
export class BaseRepository {

    constructor(private readonly dbModel) { }

    protected async getList(pagination: PaginationOutput | null): Promise<any> {
        if(pagination) {
            try {
                return await this.dbModel.find()
                                .limit(pagination.limit)
                                .skip(pagination.offset);
            } catch (error) {
                return new HttpException(error, 400);
            }
        } else {
            try {
                return await this.dbModel.find();
            } catch (error) {
                return new HttpException(error, 400);
            }
        }
    }

    protected async getOneById(id: string): Promise<any> {
        try {
            const entity = await this.dbModel.findById(id);
            if(entity) {
                return entity
            } else {
                return new HttpException("Entity Does not exist", 404);
            }
        } catch (error) {
            return new HttpException(error, 400);
        }
    }

    protected async getOneByWhere(where: any): Promise<any> {
        try {
            return await this.dbModel.find(where);
        } catch (error) {
            return new HttpException(error, 400);
        }
    }

    protected async create(body: any): Promise<any> {
        try {
            const createdModel = new this.dbModel(body);
            return await createdModel.save();
        } catch (error) {
            return new HttpException(error, 400);
        }
    }

    protected async update(id: string, body: any): Promise<any> {
        try {
            return await this.dbModel.findByIdAndUpdate({'_id': id}, {$set: body});
        } catch (error) {
            return new HttpException(error.message, 400);
        }
    }

    protected async delete(id: string): Promise<any> {
        try {
            const entity = await this.dbModel.findByIdAndDelete(id);
            if(entity) {
                return entity;
            } else {
                return new HttpException("Entity Does not exist", 404);
            }
        } catch (error) {
            return new HttpException(error.message, 400);
        }
    }
}
