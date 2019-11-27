import { Controller, Get, Post, Put, Delete, Param, UseInterceptors, Query } from '@nestjs/common';
import { TID } from 'server/common/types';
import { IGetParams } from 'server/common/interfaces';
import { IController } from 'server/common/IController';
import { PageContent, IStatusDTO } from '@mapbul-pub/types';
import { StatusesService } from 'server/api/statuses/statuses.service';
import { NotFoundInterceptor } from 'server/interceptors/NotFoundInterceptor';
import { GetAllQueryDTO } from 'server/common/QueryDTO';

@Controller('api/statuses')
export class StatusesController implements IController<IStatusDTO> {
  constructor(private readonly service: StatusesService) {}

  @Get()
  @UseInterceptors(NotFoundInterceptor)
  async getAll(@Query() query: GetAllQueryDTO): Promise<PageContent<IStatusDTO>> {
    return this.service.getAll(query);
  }

  @Post()
  postItem(item: IStatusDTO): IStatusDTO {
    throw new Error('Method not implemented.');
  }

  @Put()
  putAll(item: IStatusDTO): IStatusDTO {
    throw new Error('Method not implemented.');
  }

  @Get(':id')
  @UseInterceptors(NotFoundInterceptor)
  async getItem(@Param() params: IGetParams): Promise<IStatusDTO> {
    return await this.service.getItem(params.id);
  }

  @Delete()
  deleteAll(): void {
    throw new Error('Method not implemented.');
  }

  @Put(':id')
  putItem(id: TID, item: IStatusDTO): IStatusDTO {
    throw new Error('Method not implemented.');
  }

  deleteItem(id: TID): IStatusDTO {
    throw new Error('Method not implemented.');
  }
}
