import * as mysql from 'mysql';
import * as util from 'util';
import { IService } from 'server/common/IService';
import { IArticleDTO } from 'server/articles/article.dto';
import { Connection } from 'mysql';
import { TID } from 'server/common/types';
import { serverConfig } from 'common/serverConfig';

export class ArticlesService extends IService<IArticleDTO> {
  constructor() {
    super();
    this.connection = mysql.createConnection(serverConfig.dbConnection);
    this.query = util.promisify(this.connection.query).bind(this.connection);
  }

  connection: Connection;
  query: (expression: string) => Promise<any>;

  async getAll(): Promise<IArticleDTO[]> {
    const result = await this.query('SELECT id, title from article LIMIT 1');
    return result.map(
      (i: IArticleDTO) => ({ id: i.id, title: i.title } as IArticleDTO),
    );
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
