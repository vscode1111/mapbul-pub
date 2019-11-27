import * as mysql from 'mysql';
import * as util from 'util';
import { BaseService } from 'server/common/BaseService';
import { Connection } from 'mysql';
import { TID } from 'server/common/types';
import { GlobalVar } from '@mapbul-pub/common';
import { PageContent, IWorkTimeDTO } from '@mapbul-pub/types';
import { GetAllQueryDTO } from 'server/common/QueryDTO';

export class WorkTimesService extends BaseService<IWorkTimeDTO> {
  constructor() {
    super();
    this.connection = mysql.createConnection({ ...GlobalVar.env.dbConnection, multipleStatements: true });
    this.query = util.promisify(this.connection.query).bind(this.connection);
  }

  connection: Connection;
  query: (expression: string) => Promise<any>;

  async getAll(query: GetAllQueryDTO): Promise<PageContent<IWorkTimeDTO>> {
    let additional = '';
    const isPagination = query.page && query.size;
    if (isPagination) {
      const offset = (query.page - 1) * query.size;
      additional = `limit ${offset},${query.size}; SELECT count(*) FROM worktime`;
    }
    const records = await this.query(`
      SELECT
        \`id\`,
        \`openTime\`,
        \`closeTime\`,
        \`markerId\`,
        \`weekDayId\`
      FROM worktime ${additional}`);

    return {
      content: isPagination ? records[0] : records,
      totalPages: isPagination ? Number(Math.ceil(records[1][0]['count(*)'] / query.size)) : 1,
    };
  }

  postItem(item: IWorkTimeDTO): Promise<IWorkTimeDTO> {
    throw new Error('Method not implemented.');
  }

  putAll(item: IWorkTimeDTO): IWorkTimeDTO {
    throw new Error('Method not implemented.');
  }

  deleteAll(): void {
    throw new Error('Method not implemented.');
  }

  async getItem(id: TID): Promise<IWorkTimeDTO> {
    return (await this.query(`
      SELECT
        \`id\`,
        \`openTime\`,
        \`closeTime\`,
        \`markerId\`,
        \`weekDayId\`
      FROM worktime
      WHERE id = ${id}`))[0];
  }

  putItem(id: TID): IWorkTimeDTO {
    throw new Error('Method not implemented.');
  }

  deleteItem(id: TID): IWorkTimeDTO {
    throw new Error('Method not implemented.');
  }
}
