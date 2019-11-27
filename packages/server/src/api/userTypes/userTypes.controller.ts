import { Controller, Get, Post, Put, Delete, Param, UseInterceptors, Query } from '@nestjs/common';
import { TID } from 'server/common/types';
import { IGetParams } from 'server/common/interfaces';
import { IController } from 'server/common/IController';
import { PageContent, IUserTypeDTO } from '@mapbul-pub/types';
import { UserTypesService } from 'server/api/userTypes/userTypes.service';
import { NotFoundInterceptor } from 'server/interceptors/NotFoundInterceptor';
import { GetAllQueryDTO } from 'server/common/QueryDTO';

@Controller('api/usertypes')
export class UserTypesController implements IController<IUserTypeDTO> {
  constructor(private readonly service: UserTypesService) {}

  @Get()
  @UseInterceptors(NotFoundInterceptor)
  async getAll(@Query() query: GetAllQueryDTO): Promise<PageContent<IUserTypeDTO>> {
    return this.service.getAll(query);
  }

  @Post()
  postItem(item: IUserTypeDTO): IUserTypeDTO {
    throw new Error('Method not implemented.');
  }

  @Put()
  putAll(item: IUserTypeDTO): IUserTypeDTO {
    throw new Error('Method not implemented.');
  }

  @Get(':id')
  @UseInterceptors(NotFoundInterceptor)
  async getItem(@Param() params: IGetParams): Promise<IUserTypeDTO> {
    return await this.service.getItem(params.id);
  }

  @Delete()
  deleteAll(): void {
    throw new Error('Method not implemented.');
  }

  @Put(':id')
  putItem(id: TID, item: IUserTypeDTO): IUserTypeDTO {
    throw new Error('Method not implemented.');
  }

  deleteItem(id: TID): IUserTypeDTO {
    throw new Error('Method not implemented.');
  }
}
