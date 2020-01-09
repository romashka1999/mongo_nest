import { PaginationOutput } from "../helpers/pagination";
import { Injectable } from '@nestjs/common'

export interface IBaseRepository {
    getList(pagination: PaginationOutput | null):Promise<any>;
    getOneById(id: string): Promise<any>;
    getOneByWhere(where: any): Promise<any>;
    create(entity: any): Promise<any>;
    update(id: string, entity: any): Promise<any>;
    delete(id: string): Promise<any>;
}

@Injectable()
export class BaseRepository implements IBaseRepository {

    constructor(private readonly dbModel) { }

    public async getList(pagination: PaginationOutput | null): Promise< any> {
        if(pagination) {
            return await this.dbModel.find()
                                .limit(pagination.limit)
                                .skip(pagination.offset);
        } else {
            return await this.dbModel.find();
        }
    }

    public async getOneById(id: string): Promise<any> {
        return await this.dbModel.findById(id);
    }

    public async getOneByWhere(where: any): Promise<any> {
        return await this.dbModel.find(where);
    }

    public async create(body: any): Promise<any> {
        const createdModel = new this.dbModel(body);
        return await createdModel.save();
    }

    public async update(id: string, body: any): Promise<any> {
        return await this.dbModel.findByIdAndUpdate({'_id': id}, {$set: body});
    }

    public async delete(id: string): Promise<any> {
        return await this.dbModel.findByIdAndDelete(id)
    }
}

