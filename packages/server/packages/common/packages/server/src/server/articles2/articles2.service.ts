import * as mysql from 'mysql';
import * as util from 'util';
import { Injectable } from '@nestjs/common';
import { IService } from 'server/common/IService';
import { IArticleDTO } from 'server/articles2/article.dto';
import { Connection } from 'mysql';
import { TID } from 'server/common/types';
import { serverConfig } from 'common/serverConfig';

@Injectable()
export class Articles2Service implements IService<IArticleDTO> {
  constructor() {
    this.connection = mysql.createConnection(serverConfig.dbConnection);
    this.query = util.promisify(this.connection.query).bind(this.connection);
  }

  connection: Connection;
  query: (expression: string) => Promise<any>;

  async getAll(): Promise<IArticleDTO[]> {
    return await this.query(`
      SELECT
        id,
        title,
        titleEn,
        titlePhoto,
        photo,
        sourceUrl,
        sourceUrlEn,
        sourcePhoto,
        sourcePhotoEn,
        description,
        descriptionEn,
        text,
        textEn,
        authorId,
        editorId,
        addedDate,
        publishedDate,
        markerId,
        startDate,
        startTime,
        statusId,
        baseCategoryId,
        endDate,
        cityId
      FROM article`);
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