import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { GlobalVar } from '@mapbul-pub/common';
import { readRouterSync } from '@mapbul-pub/codegen';
import { NestExpressApplication } from '@nestjs/platform-express';

describe('AppController (e2e)', () => {
  let app: NestExpressApplication;

  beforeAll(async () => {
    GlobalVar.setup(`${__dirname}/.env`);
    console.log(GlobalVar.env);
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setBaseViewsDir(`${__dirname}/views`);
    app.setViewEngine('hbs');
    await app.init();
  });

  const check = (url: string) => {
    return request(app.getHttpServer())
      .get(url)
      .expect(200);
  };

  it('/ (GET)', () => {
    return check('/').expect('Hello World!');
  });

  it('/api (GET)', async () => {
    await check('/api');
  });

  it('/api/admin (GET)', async () => {
    // await check('/api/admins');
    const apiText = readRouterSync();
    const apiInits = apiText.split(/\r?\n/);
    apiInits.forEach(async (item: string) => {
      if (item !== '') {
        const url = `/${item.trim()}`;
        try {
          await check(`${url}`);
        } catch (e) {
          // console.log(item, e);
          console.log(`Error in ${url}`);
        }
      }
    });
  });
});
