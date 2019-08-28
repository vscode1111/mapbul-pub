import * as mysql from 'mysql';
import * as util from 'util';
import { Injectable } from '@nestjs/common';
import { IService } from 'src/common/IService';
import { IArticleDTO } from './dto/article.dto';
import { Connection } from 'mysql';
import { TID } from 'src/common/types';

@Injectable()
export class ArticlesService implements IService<IArticleDTO> {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '461301+MY',
            database: 'mapbul',
        });
        this.query = util.promisify(this.connection.query).bind(this.connection);
    }

    connection: Connection;
    query: any;

    async getAll(): Promise<IArticleDTO[]> {
        const result = await this.query('SELECT id, title from article LIMIT 100');
        return result.map((i: IArticleDTO) => ({id: i.id, title: i.title} as IArticleDTO));
    }

    postItem(item: IArticleDTO): IArticleDTO {
        throw new Error('Method not implemented.');
    }
    putAll(item: IArticleDTO): IArticleDTO {
        throw new Error('Method not implemented.');
    }
    deleteAll(): void {
        throw new Error('Method not implemented.');
    }
    getItem(id: TID): IArticleDTO {
        throw new Error('Method not implemented.');
    }
    putItem(id: TID): IArticleDTO {
        throw new Error('Method not implemented.');
    }
    deleteItem(id: TID): IArticleDTO {
        throw new Error('Method not implemented.');
    }
}