import { BaseService } from 'serverSrc/common/BaseService';
import { TID } from 'serverSrc/common/types';
import { dbConnectionSingleton } from '@mapbul-pub/common';
import { IDbConnection, PageContent, IDiscountDTO, IGetAllQuery } from '@mapbul-pub/types';

export class DiscountsService implements BaseService<IDiscountDTO> {
  constructor() {
    this.connection = dbConnectionSingleton.getInstance();
  }

  private connection: IDbConnection;

  async getAll(query: IGetAllQuery): Promise<PageContent<IDiscountDTO>> {
    let filter = '';
    if (query.filter) {
      filter += `WHERE ${query.filter}`;
    }
    let sort = '';
    if (query.sort) {
      sort += `ORDER BY ${query.sort}`;
    }
    let additional = `${filter} ${sort}`;
    const isPagination = query.page && query.size;
    if (isPagination && query.page && query.size) {
      const offset = (query.page - 1) * query.size;
      additional += ` LIMIT ${offset},${query.size}; SELECT count(*) FROM discount ${filter}`;
    }
    const records = await this.connection.query(`
      SELECT
        \`id\`,
        \`value\`
      FROM discount ${additional}`);

    const totalElements = Number(records[1][0]['count(*)']);

    return {
      content: isPagination ? records[0] : records,
      totalElements,
      totalPages: isPagination ? Number(Math.ceil(totalElements / (query?.size || 1))) : 1,
    };
  }

  //postItem(item: IDiscountDTO): Promise<IDiscountDTO> {
  //  throw new Error('Method not implemented.');
  //}

  //putAll(item: IDiscountDTO): IDiscountDTO {
  //  throw new Error('Method not implemented.');
  //}

  //deleteAll(): void {
  //  throw new Error('Method not implemented.');
  //}

  async getItem(id: TID): Promise<IDiscountDTO> {
    return (
      await this.connection.query(`
      SELECT
        \`id\`,
        \`value\`
      FROM discount
      WHERE id = ${id}`)
    )[0];
  }

  //putItem(id: TID): IDiscountDTO {
  //  throw new Error('Method not implemented.');
  //}

  //deleteItem(id: TID): IDiscountDTO {
  //  throw new Error('Method not implemented.');
  //}
}
